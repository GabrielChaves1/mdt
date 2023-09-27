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

mdtPresos = {}
mdtCodigoPenal = {}

prisonsTotalCount = 0
officersOnlineCount = {}

permissionsTablet = {
    ["CAN_MANAGE_WARNING"] = { display = "Gerenciar Avisos", description = "Com essa permissão o usuário poderá criar, editar e excluir avisos da organização" },
}

function src.getInitialData()
    local source  = source
    local user_id = zof.getUserId(source)

    local sUser_id = tostring(user_id)
    local org = playersOrg[sUser_id]

    if not org then return end

    return {
        officer = {
            id = user_id,
            name = zof.getName(user_id),
        },
    
        canStartPatrol = true,
        totalOfPrisions = #mdtPresos,
        totalOfFines = 52,
        totalOfWorkingOfficers = officersOnlineCount[org] or 0,
    
        notices = zof.query("mdt/mdt_avisos/getFromOrg", { org = org }),
    
        permissions = cargosOrgs[cacheOrgs[org].officers[sUser_id].cargo].perms
    }
end

function src.getOnlineOfficers()
    local source = source
    local user_id = zof.getUserId(source)
    local sUser_id = tostring(user_id)

    local org = playersOrg[sUser_id]
    if not org then return {} end

    local officersOnline = {}
    for i, v in pairs(cacheOrgs[org].officers) do
        if v.online then
            local cargo = cargosOrgs[v.cargo].cargo

            table.insert(officersOnline, {
                user_id = v.user_id,
                nome = v.nome,
                cargo = orgsConfigList[org].hierarchy[cargo].displayName,
                org = org
            })
        end
    end

    return officersOnline
end

function initOrgsFromDb()
    for org, info in pairs(orgsConfigList) do
        if not cacheOrgs[org] then 
            cacheOrgs[org] = {
                officers = {},
                details = info.details
            }
        end

        for cargo, v in pairs(info.hierarchy) do
            if not cargosOrgs[cargo] then cargosOrgs[cargo] = {} end
            if not cargosOrgs[v.offServiceSet] then cargosOrgs[v.offServiceSet] = {} end

            cargosOrgs[cargo].org = org
            cargosOrgs[cargo].cargo = cargo

            cargosOrgs[v.offServiceSet].org = org
            cargosOrgs[v.offServiceSet].cargo = cargo
        end

        local rows = zof.query("mdt/mdt_hierarquia/getFromOrg", { org = org })
        if (#rows > 0) then
            for i, v in pairs(rows) do
                local sUser_id = tostring(v.user_id)
                v.online = zof.getUserSource(v.user_id) ~= nil
    
                if v.online then officersOnlineCount[org] = (officersOnlineCount[org] or 0) + 1 end
    
                cacheOrgs[org].officers[sUser_id] = v
                playersOrg[sUser_id] = org
            end
        end
    end
end

function addPlayerOrg(infos)
    if not infos.org then return end
    if not infos.cargo then return end
    if not infos.user_id then return end

    local sUser_id = tostring(infos.user_id)
    local source = zof.getUserSource(infos.user_id)

    if not source then return end

    local playerInfos = zof.query("mdt/mdt_hierarquia/getPlayer", { user_id = infos.user_id })
    if #playerInfos > 0 then return end -- colocar mensagem de player já está em outra organização
    if cacheOrgs[infos.org].officers[infos.user_id] then addPlayerOrg(cacheOrgs[infos.org].officers[infos.user_id]) end -- player no cache e fora da db

    local newInfosPlayer = { 
        user_id = infos.user_id, cargo = infos.cargo, 
        org = infos.org, unidade = infos.org, cursos = json.encode({}), 
        pontos = 0, time_ptr = 0, dt_entrada = os.time(), nome = zof.getName(infos.user_id), online = true
    }

    officersOnlineCount[infos.org] = (officersOnlineCount[infos.org] or 0) + 1

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
    if org then 
        cacheOrgs[org].officers[sUser_id].online = true

        officersOnlineCount[org] = (officersOnlineCount[org] or 0) + 1
    end

    if mdtPresos[sUser_id] then vCLIENT.createThreadIsArrested(source, mdtPresos[sUser_id].tempo) end
end)

AddEventHandler("playerDropped", function(reason)
    local source = source
    local user_id = zof.getUserId(source)
    local sUser_id = tostring(user_id)

    local org = playersOrg[sUser_id]
    if not org then return end

    officersOnlineCount[org] = (officersOnlineCount[org] or 0) - 1
    cacheOrgs[org].officers[sUser_id].online = false
end)

AddEventHandler('vRP:playerJoinGroup', function(user_id, group, gtype)
	if user_id and cargosOrgs[group] then
        if not cargosOrgs[group].org then return end

        addPlayerOrg({ user_id = user_id, org = cargosOrgs[group].org, cargo = group, permissions = (cargosOrgs[group].perms or {}) })
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

function src.getWarningsOrg(org)
    return zof.query("zo/get_avisos_org", { org = org })
end

function src.createWarningOrg(details)
    local source  = source
    local user_id = zof.getUserId(source)
    local sUser_id = tostring(user_id)

    local org = playersOrg[sUser_id]
    if not org then return {} end

    zof.execute("mdt/mdt_avisos/insert", {
        id_autor = user_id, autor = zof.getName(user_id),
        titulo = details.title, descricao = details.description,
        data = os.time(), org = org
    })

    return
end

function src.deleteWarningOrg(id)
    local source  = source
    local user_id = zof.getUserId(source)

    local sUser_id = tostring(user_id)

    local org = playersOrg[sUser_id]
    if not org then return {} end

    zof.execute("mdt/mdt_avisos/delete", { id = id })

    return
end

function src.arrestBandit(details)
    local source = source
    local user_id = zof.getUserId(source)

    if details.banditUserId then
        local banditSource = zof.getUserSource(details.banditUserId)
        if not banditSource then print("arrestBandit player offline") return end -- player offline

        details.user_id = parseInt(details.banditUserId)
        details.name = zof.getName(details.banditUserId)
        details.nameCity = "Cidade Teste"
        details.date = returnDateFormat()
        details.id_officer = user_id
        details.pedOfficer = tonumber(source)
        details.banditSource = banditSource

        vCLIENT.cutseneMugshot(banditSource, details)
    end
end

function src.getPrisions()
    return zof.query("mdt/mdt_historico_penal/getAll", {})
end

function src.registerArrestBandit(details)
    prisonsTotalCount = prisonsTotalCount + 1

    local valorMulta = 0
    local tempoTotal = 0
    local codigosPenais = {}

    for i, v in pairs(details.codigos_penais) do
        valorMulta = valorMulta + v.valor_multa
        tempoTotal = tempoTotal + v.tempo

        table.insert(codigosPenais, v.id)
    end

    zof.query("mdt/mdt_historico_penal/insert", {
        user_id = details.user_id,
        nome = zof.getName(details.user_id),
        valor_multa = valorMulta,
        tempo = tempoTotal,
        codigos_penais = json.encode(codigosPenais),
        data = os.time(),
        descricao = details.descricao,
        oficiais = json.encode(details.oficiais),
        imgs = json.encode(details.imgs),
        is_multa = false
    })

    local lastIdInsertHistoricoPenal = zof.query("mdt/mdt_historico_penal/getLastIdInserted", {})[1].id
    if not lastIdInsertHistoricoPenal then return end

    local info = {
        user_id = details.user_id,
        id_historico_penal = lastIdInsertHistoricoPenal,
        nome = details.name,
        foto = details.mugshot,
        tempo = details.time,
        autor = zof.getName(details.id_officer),
        id_autor = details.id_officer
    }

    zof.query("mdt/mdt_presos/insert", info)
    mdtPresos[tostring(details.user_id)] = info

    local banditSource = zof.getUserSource(details.user_id)
    if not banditSource then return end

    Citizen.Wait(30000)

    vCLIENT.createThreadIsArrested(details.banditSource, details.time)
end

function src.updateTimeArrested(time)
    local source = source
    local user_id = zof.getUserId(source)

    if not user_id then return end

    if time > 0 then
        zof.query("mdt/mdt_presos/update", { user_id = user_id, tempo = time })
        mdtPresos[tostring(user_id)].tempo = time
    else
        zof.query("mdt/mdt_presos/delete", { user_id = user_id })
        mdtPresos[tostring(user_id)] = nil
    end
end

function src.insertOrUpdatePermissionsTablet(infos)
    if cargosOrgs[infos.cargo] then
        cargosOrgs[infos.cargo].perms = infos.perms
        zof.query("mdt/mdt_perms_cargos/update", { cargo = infos.cargo, org = infos.org, perms = infos.perms })
    else
        cargosOrgs[infos.cargo].perms = infos.perms
        zof.query("mdt/mdt_perms_cargos/insert", { cargo = infos.cargo, org = infos.org, perms = infos.perms })
    end
end

function src.markOfficerOnMap(user_id)
    local source = source
    local markingSource = zof.getUserSource(user_id)

    vCLIENT.markOfficerOnMap(source, tonumber(markingSource), "Oficial - " .. zof.getName(user_id))
end

function src.getAllCodigoPenal()
    return mdtCodigoPenal
end

function src.insertOrUpdateCodigoPenal(details)
    local infos = {
        nome_codigo = details.nome_codigo,
        descricao = details.descricao,
        tempo = details.tempo,
        multa = details.multa
    }

    if details.insert then
        zof.query("mdt/mdt_codigo_penal/insert", infos)

        local lastIdInsert = zof.query("mdt/mdt_codigo_penal/getLastIdInserted", {})[1].id
        if not lastIdInsert then return end

        infos.id = lastIdInsert
        table.insert(mdtCodigoPenal, infos)

        return
    end

    for i, v in pairs(mdtCodigoPenal) do
        if v.id == details.id then
            infos.id = details.id
            zof.query("mdt/mdt_codigo_penal/update", infos)

            mdtCodigoPenal[i] = infos

            return
        end
    end
    
end

function src.deleteCodigoPenal(id)
    zof.execute("mdt/mdt_codigo_penal/getAll", { id = id })
end

Citizen.CreateThread(function()
    Citizen.Wait(5000)

    initOrgsFromDb()

    local permsGroups = zof.query("mdt/mdt_perms_cargos/getAll", {})
    for i, v in pairs(permsGroups) do
        if cargosOrgs[v.cargo] then
            cargosOrgs[v.cargo].perms = v
        end
    end
    permsGroups = nil

    mdtPresos.all = zof.query("mdt/mdt_presos/getAll", {})
    for i, v in pairs(mdtPresos.all) do
        mdtPresos[tostring(v.user_id)] = v
    end
    mdtPresos.all = nil

    prisonsTotalCount = #zof.query("mdt/mdt_historico_penal/getAll", {})
    mdtCodigoPenal = zof.query("mdt/mdt_codigo_penal/getAll", {})
end)