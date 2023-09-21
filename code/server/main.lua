Tunnel = module("vrp", "lib/Tunnel")
Proxy = module("vrp", "lib/Proxy")

vRP = Proxy.getInterface("vRP")
vRPclient = Tunnel.getInterface("vRP")

Tunnel.bindInterface(GetCurrentResourceName(), src)
Proxy.addInterface(GetCurrentResourceName(), src)

vCLIENT = Tunnel.getInterface(GetCurrentResourceName())

cacheOrgs = {}

cargosOrgs = {}
playersOrg = {}

chatOrgsLog = {}

function initOrgsFromDb()
    for org, info in pairs(orgsConfigList) do
        if not cacheOrgs[org] then 
            cacheOrgs[org] = {
                officers = {},
                details = info.details
            } 
        end

        for cargo, v in pairs(info.hierarchy) do
            cargosOrgs[cargo] = org
            cargosOrgs[v.offServiceSet] = org
        end

        local rows = zof.query("mdt/mdt_hierarquia/getFromOrg", { org = org })
        if not #rows > 0 then return end

        for i, v in pairs(rows) do
            local user_id = tostring(v.user_id)
            v.online = zof.getUserSource(v.user_id) ~= nil

            cacheOrgs[org].officers[user_id] = v
        end
    end
end

function addPlayerOrg(infos)
    if not infos.org then return end
    if not infos.cargo then return end
    if not infos.user_id then return end

    local sUser_id = tostring(infos.user_id)

    local playerInfos = zof.query("mdt/mdt_hierarquia/getPlayer", { user_id = infos.user_id })
    if #playerInfos > 0 then return end -- colocar mensagem de player já está em outra organização
    if cacheOrgs[infos.org].officers[infos.user_id] then addPlayerOrg(cacheOrgs[infos.org].officers[infos.user_id]) end -- player no cache e fora da db

    local newInfosPlayer = { 
        user_id = infos.user_id, cargo = infos.cargo, 
        org = infos.org, unidade = infos.org, cursos = json.encode({}), 
        pontos = 0, time_ptr = 0, dt_entrada = os.time(), nome = zof.getName(infos.user_id)
    }

    zof.query("mdt/mdt_hierarquia/insert", newInfosPlayer)
    cacheOrgs[infos.org].officers[sUser_id] = newInfosPlayer
    playersOrg[sUser_id] = infos.org
end

function removePlayerOrg(user_id)
    if not user_id then return end
    local sUser_id = tostring(user_id)
    
    zof.query("mdt/mdt_hierarquia/delete", { user_id = user_id })
    cacheOrgs[org].officers[sUser_id] = nil
    playersOrg[sUser_id] = nil
end

AddEventHandler("vRP:playerSpawn", function(user_id, source, first_spawn)
	Citizen.Wait(10000)
	
    local sUser_id = tostring(user_id)

    local org = playersOrg[sUser_id]
    if not org then return end

    cacheOrgs[org].officers[sUser_id].online = true
end)

AddEventHandler("playerDropped", function(reason)
    local source = source
    local user_id = zof.getUserId(source)
    local sUser_id = tostring(user_id)

    local org = playersOrg[sUser_id]
    if not org then return end

    cacheOrgs[org].officers[sUser_id].online = false
end)

AddEventHandler('vRP:playerJoinGroup', function(user_id, group, gtype)
	if user_id and cargosOrgs[group] then
        addPlayerOrg({ user_id = user_id, org = cargosOrgs[group], cargo = group })
    end
end)

AddEventHandler('vRP:playerLeaveGroup', function(user_id, group, gtype)
    if user_id and cargosOrgs[group] then
        local sUser_id = tostring(user_id)
        local org = playersOrg[sUser_id]

        if not org then return end

        removePlayerOrg({ user_id = user_id })
    end
end)

function src.getMessagesChatOrg(org)
    local source = source
    local user_id = zof.getUserId(source)

    return chatOrgsLog[org]
end

function src.sendMessageChatOrg(message, org)
    local source = source
    local user_id = zof.getUserId(source)

    if not chatOrgsLog[org] then chatOrgsLog[org] = {} end

    table.insert(chatOrgsLog[org], {
        user_id = user_id,
        message = message,
        autor = zof.getName(user_id),
        date = os.date()
    })

    Citizen.CreateThread(function()
        for i, v in pairs(cacheOrgs[org].officers) do
            local player = zof.getUserSource(v.user_id)
            
            if source ~= player and player then
                vCLIENT.atualizarChatOrg(player, chatOrgsLog[org])
            end
        end
    end)

    return chatOrgsLog[org]
end