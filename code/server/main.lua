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
    ["CAN_MANAGE_WARNING"] = { display = "Gerenciar Avisos", description = "Com essa permissão o usuário poderá CRIAR, EDITAR e EXCLUIR avisos da organização" },
    ["CAN_REGISTER_JAIL"] = { display = "Prender Indivíduo", description = "Com essa permissão o usuário poderá PRENDER qualquer cidadão" },
    ["CAN_REGISTER_UNJAIL"] = { display = "Soltar Indivíduo", description = "Com essa permissão o usuário poderá SOLTAR qualquer cidadão preso" },
}

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

            local nextCargo = getNextCargo(info.hierarchy, v)

            cargosOrgs[cargo] = { 
                org = org,
                cargo = cargo,
                nextCargo = nextCargo
            }

            cargosOrgs[v.offServiceSet] = {
                org = org,
                cargo = cargo,
                nextCargo = nextCargo
            }
        end

        local rows = zof.query("mdt/mdt_hierarquia/getFromOrg", { org = org })
        if (#rows > 0) then
            for i, v in pairs(rows) do
                local sUser_id = tostring(v.user_id)
                v.online = zof.getUserSource(v.user_id) ~= nil
    
                if v.online then officersOnlineCount[org] = (officersOnlineCount[org] or 0) + 1 end

                v.timeline = json.decode(v.timeline or json.encode({}))
    
                cacheOrgs[org].officers[sUser_id] = v
                playersOrg[sUser_id] = org
            end
        end
    end

    print("LOADED CACHE")
end

function src.getInitialData()
    local source  = source
    local user_id = zof.getUserId(source)

    local sUser_id = tostring(user_id)
    local org = playersOrg[sUser_id]

    if not org then
        local myGroups = zof.getUserGroups(user_id)
        for i, v in pairs(myGroups) do
            if cargosOrgs[i] then
                org = addPlayerOrg({ user_id = user_id, org = cargosOrgs[i].org, cargo = i, permissions = (cargosOrgs[i].perms or {}) })
                Citizen.Wait(1000)

                goto continue
            end
        end
    end

    ::continue::

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

function src.setItemTimeline(user_id, item)
    local sUser_id = tostring(user_id)
    local org = playersOrg[sUser_id]

    if not org then return end
    if not cacheOrgs[org] then return end
    if not cacheOrgs[org].officers[sUser_id] then return end

    local newTimeline = cacheOrgs[org].officers[sUser_id].timeline
    if not newTimeline then newTimeline = {} end

    table.insert(newTimeline, item)
    zof.query("mdt/mdt_hierarquia/updateTimelinePlayer", { user_id = user_id, timeline = json.encode(newTimeline) })

    cacheOrgs[org].officers[sUser_id].timeline = newTimeline
end

function src.getOfficerData(fullProfile)
    local source = source
    local user_id = zof.getUserId(source)

    local sUser_id = tostring(user_id)
    local org = playersOrg[sUser_id]

    if not org then return end

    local officer = cacheOrgs[org].officers[sUser_id]
    if not officer then return end

    local nextCargo = cargosOrgs[officer.cargo].nextCargo

    if not fullProfile then
        return {
            officer = officer.nome,
            cargo = orgsConfigList[org].hierarchy[officer.cargo].displayName,
            xp = officer.pontos,
            xpToUp = nextCargo.expUp,
            img = "https://imgur.com/R4W3z7i.png"
        }
    end

    return {
        officer = officer.nome,
        cargo = orgsConfigList[org].hierarchy[officer.cargo].displayName,
        nextCargo = orgsConfigList[org].hierarchy[nextCargo.cargo].displayName,
        xp = officer.pontos,
        xpToUp = nextCargo.expUp,
        cursos = {},
        timeline = cacheOrgs[org].officers[sUser_id].timeline,
        img = "https://imgur.com/R4W3z7i.png" -- vCLIENT.getHeadshot(source, tonumber(source))
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

function getNextCargo(hierarchy, infoCargo)
    local nextCargo = nil
    for i, k in pairs(hierarchy) do
        if (infoCargo.position - 1) == k.position then
            nextCargo = { cargo = i, expUp = infoCargo.exp }
            goto continue
        end
    end

    if nextCargo == nil then
        nextCargo = { cargo = cargo, expUp = infoCargo.exp }
    end

    ::continue::
    return nextCargo
end

function src.setXpPlayer(recevieXp, pUser_id)
    local source = source
    local user_id = zof.getUserId(source)
    if user_id == nil then user_id = pUser_id end
    local sUser_id = tostring(user_id)

    local org = playersOrg[sUser_id]
    if not org then return end

    local officer = cacheOrgs[org].officers[sUser_id]
    if not officer then return end

    local newXp = officer.pontos + recevieXp
    local nextCargo = cargosOrgs[officer.cargo].nextCargo

    if newXp >= nextCargo.expUp then
        -- UP DE CARGO
        zof.query("mdt/mdt_hierarquia/updateCargoPlayer", { user_id = user_id, cargo = nextCargo.cargo })
        cacheOrgs[org].officers[sUser_id].cargo = nextCargo.cargo

        src.setItemTimeline(user_id, { date = os.date(), title = "Promovido para **" .. orgsConfigList[org].hierarchy[nextCargo.cargo].displayName .. "**", icon = "PartyPopper" })
    end

    zof.query("mdt/mdt_hierarquia/updateXpPlayer", { user_id = user_id, xp = newXp })
    cacheOrgs[org].officers[sUser_id].pontos = newXp
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
        pontos = 0, time_ptr = 0, dt_entrada = os.date(), nome = zof.getName(infos.user_id), online = true,
        timeline = json.encode({
            { color = "orange", date = os.date(), title = "Entrou na **Corporação**", icon = "PartyPopper" }
        })
    }

    officersOnlineCount[infos.org] = (officersOnlineCount[infos.org] or 0) + 1

    zof.query("mdt/mdt_hierarquia/insert", newInfosPlayer)

    cacheOrgs[infos.org].officers[sUser_id] = newInfosPlayer
    playersOrg[sUser_id] = infos.org

    return infos.org
end

function removePlayerOrg(user_id)
    if not user_id then return end
    local sUser_id = tostring(user_id)
    
    zof.query("mdt/mdt_hierarquia/delete", { user_id = user_id })
    cacheOrgs[org].officers[sUser_id] = nil

    playersOrg[sUser_id] = nil
end

function src.getHierarchy()
    local source = source
    local user_id = zof.getUserId(source)
    local sUser_id = tostring(user_id)

    local org = playersOrg[sUser_id]
    if not org then return end

    local rolesHierarchy = {}

    for i, v in pairs(orgsConfigList[org].hierarchy) do
        table.insert(rolesHierarchy, {
            group = i,
            display = v.displayName,
            position = v.position,
            org = org
        })
    end

    return rolesHierarchy
end

function src.getPermissionsGroup(group)
    local source = source
    local user_id = zof.getUserId(source)
    local sUser_id = tostring(user_id)

    local org = playersOrg[sUser_id]

    if not org then return end
    if not group then return end

    local permsGroup = {}
    for perm, v in pairs(permissionsTablet) do
        if cargosOrgs[group].perms ~= nil then
            v.active = (cargosOrgs[group].perms[perm] or nil) ~= nil
        else
            v.active = false
        end

        v.index = perm
        table.insert(permsGroup, v)
    end

    return permsGroup
end

function src.getOfficersGroup(group)
    local source = source
    local user_id = zof.getUserId(source)
    local sUser_id = tostring(user_id)

    local org = playersOrg[sUser_id]

    if not org then return end
    if not group then return end

    local officers = cacheOrgs[org].officers
    local officersGroup = {}

    for i, v in pairs(officers) do
        if v.cargo == group then
            table.insert(officersGroup, {
                user_id = v.user_id,
                nome = v.nome
            })
        end
    end

    return officersGroup
end

AddEventHandler("vRP:playerSpawn", function(user_id, source, first_spawn)
	Citizen.Wait(10000)

    if mdtPresos[sUser_id] then vCLIENT.createThreadIsArrested(source, mdtPresos[sUser_id].tempo) end
	
    local sUser_id = tostring(user_id)

    local org = playersOrg[sUser_id]
    if org then 
        cacheOrgs[org].officers[sUser_id].online = true
        officersOnlineCount[org] = (officersOnlineCount[org] or 0) + 1
    else
        local myGroups = zof.getUserGroups(user_id)
        for i, v in pairs(myGroups) do
            if cargosOrgs[i] then
                addPlayerOrg({ user_id = user_id, org = cargosOrgs[i].org, cargo = i, permissions = (cargosOrgs[i].perms or {}) })
                return
            end
        end
    end
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
        data = os.date(), org = org
    })

    return true
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

function src.getPlayersProximity()
    local source = source
    local user_id = zof.getUserId(source)

    local players = vCLIENT.getNearestPlayers(source, 10)
    local listPlayers = {}

    table.insert(listPlayers, { id = user_id, label = zof.getName(user_id) })

    for s, v in pairs(players) do
        if s then
            local id = zof.getUserId(s)
            table.insert(listPlayers, { id = id, label = zof.getName(id) })
        end
    end

    return listPlayers
end

function src.getPrisioners()
    return zof.query("mdt/mdt_presos/getAll", {})
end

function src.getPrisions()
    return zof.query("mdt/mdt_historico_penal/getAll", {})
end

function src.unArrested(user_id)
    local source = zof.getUserSource(user_id)
    if source then
        vCLIENT.unArrested(source)
    else
        src.updateTimeArrested(0, user_id)
    end

    return
end

function src.arrestBandit(details)
    local source = source
    local user_id = zof.getUserId(source)

    for i, v in pairs(details.bandits) do
        if v.id then
            details.banditUserId = v.id

            local banditSource = zof.getUserSource(v.id)
            if not banditSource then print("arrestBandit player offline") return end
    
            local preso = zof.query("mdt/mdt_presos/getAll", { user_id = v.id })
            if #preso > 0 then print("este player já está preso") return end
    
            details.user_id = parseInt(v.id)
            details.name = zof.getName(v.id)
            details.nameCity = "Cidade Teste"
            details.date = returnDateFormat()
            details.id_officer = user_id
            details.pedOfficer = tonumber(source)
            details.banditSource = banditSource
    
            vCLIENT.cutseneMugshot(banditSource, details)
        end
    end
end

function src.registerArrestBandit(details)
    src.setXpPlayer(actionsXp.prender, details.id_officer)

    prisonsTotalCount = prisonsTotalCount + 1

    local valorMulta = 0
    local tempoTotal = 0
    local codigosPenais = {}

    for i, v in pairs(details.codigos_penais) do
        valorMulta = valorMulta + v.multa
        tempoTotal = tempoTotal + v.tempo

        table.insert(codigosPenais, v.id)
    end

    zof.query("mdt/mdt_historico_penal/insert", {
        user_id = details.user_id,
        nome = zof.getName(details.user_id),
        valor_multa = valorMulta,
        tempo = tempoTotal,
        codigos_penais = json.encode(codigosPenais),
        data = os.date(),
        descricao = details.descricao,
        oficiais = json.encode(details.oficiais),
        mugshot = details.mugshot,
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

function src.updateTimeArrested(time, pUser)
    local source = source
    local user_id = zof.getUserId(source)

    if pUser and not user_id then user_id = pUser end
    if not user_id then return end

    if time > 0 then
        zof.query("mdt/mdt_presos/update", { user_id = user_id, tempo = time })
        mdtPresos[tostring(user_id)].tempo = time
    else
        zof.query("mdt/mdt_presos/delete", { user_id = user_id })
        mdtPresos[tostring(user_id)] = nil
    end
end

function src.insertOrUpdatePermissionsGroup(infos)
    if cargosOrgs[infos.cargo].perms ~= nil then
        cargosOrgs[infos.cargo].perms = infos.perms
        zof.query("mdt/mdt_perms_cargos/update", { cargo = infos.cargo, org = infos.org, perms = json.encode(infos.perms) })
    else
        cargosOrgs[infos.cargo].perms = infos.perms
        zof.query("mdt/mdt_perms_cargos/insert", { cargo = infos.cargo, org = infos.org, perms = json.encode(infos.perms) })
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

function src.getCrimesFromIds(ids)
    local crimes = {}

    for i, v in pairs(mdtCodigoPenal) do
        if table.contains(ids, v.id) then
            table.insert(crimes, v)
        end
    end

    return crimes
end

function src.getHistoryOffencePlayer(id)
    local historico = zof.query("mdt/mdt_historico_penal/get", { id = id })
    if historico[1] then
        return historico[1]
    end

    return false
end

function src.insertOrUpdateCodigoPenal(details)
    local infos = {
        nome_codigo = details.name,
        descricao = details.description,
        tempo = details.time,
        multa = details.fine
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
    zof.execute("mdt/mdt_codigo_penal/delete", { id = id })

    for i, v in pairs(mdtCodigoPenal) do
        if v.id == id then
            mdtCodigoPenal[i] = nil
        end
    end

    return true
end

Citizen.CreateThread(function()
    Citizen.Wait(2000)

    initOrgsFromDb()

    local permsGroups = zof.query("mdt/mdt_perms_cargos/getAll", {})
    for i, v in pairs(permsGroups) do
        if cargosOrgs[v.cargo] then
            cargosOrgs[v.cargo].perms = json.decode(v.perms or json.encode({}))
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