Tunnel = module("vrp", "lib/Tunnel")
Proxy = module("vrp", "lib/Proxy")
Tools = module("vrp", "lib/Tools")

vRP = Proxy.getInterface("vRP")
vRPclient = Tunnel.getInterface("vRP")

src = {}
Tunnel.bindInterface(GetCurrentResourceName(), src)

vSERVER = Tunnel.getInterface(GetCurrentResourceName())
nuiOpen = false

RegisterCommand("test", function()
  nuiOpen = true
  SetNuiFocus(true, true)
  SendNUIMessage({ action = "setVisible", data = true })
end)

local registerNUICallbacks = {
  ["close"] = function(data, cb)
    SetNuiFocus(false, false)
    nuiOpen = false

    cb(true)
  end,

  ["getInitialData"] = function(data, cb)
    local resp = vSERVER.getInitialData()
    if resp then cb(resp) end
  end,

  ["getOfficerData"] = function(data, cb)
    local resp = vSERVER.getOfficerData()
    if resp then cb(resp) end
  end,

  ["getProfileOfficer"] = function(data, cb)
    local resp = vSERVER.getOfficerData(true)
    if resp then cb(resp) end
  end,
  
  ["getOnlineOfficers"] = function(data, cb)
    local resp = vSERVER.getOnlineOfficers()
    if resp then cb(resp) end
  end,

  ["phoneCamShoot"] = function(data, cb)
    SendNUIMessage({ action = "setOpacity", data = 0 })
    SetNuiFocus(false, false)

    takePhoteFromCell(function(img)
      SendNUIMessage({ action = "setOpacity", data = 100 })
      SetNuiFocus(true, true)

      cb(img)
    end)
  end,

  ["getHierarchy"] = function(data, cb)
    local resp = vSERVER.getHierarchy()
    if resp then cb(resp) end
  end,

  ["getPermissionsGroup"] = function(data, cb)
    local resp = vSERVER.getPermissionsGroup(data)
    if resp then cb(resp) end
  end,

  ["getOfficersGroup"] = function(data, cb)
    local resp = vSERVER.getOfficersGroup(data)
    if resp then cb(resp) end
  end,

  ["insertOrUpdatePermissionsGroup"] = function(data, cb)
    local resp = vSERVER.insertOrUpdatePermissionsGroup(data)
  end,

  ["markOfficerOnMap"] = function(data, cb)
    local resp = vSERVER.markOfficerOnMap(data)
    if resp then cb(resp) end
  end,

  ["getPrisions"] = function(data, cb)
    local resp = vSERVER.getPrisions()
    if resp then cb(resp) end
  end,

  ["createNotice"] = function(data, cb)
    local resp = vSERVER.createWarningOrg(data)
    if resp then cb(resp) end
  end,

  ["getMessagesChatOrg"] = function(data, cb)
    local resp = vSERVER.getMessagesChatOrg(data.org)
    if resp then cb(resp) end
  end,

  ["sendMessageChatOrg"] = function(data, cb)
    local resp = vSERVER.sendMessageChatOrg(data.msg, data.org)
    if resp then cb(resp) end
  end,

  ["getCodigoPenal"] = function(data, cb)
    local resp = vSERVER.getAllCodigoPenal()
    if resp then cb(resp) end
  end,

  ["onCreateArticle"] = function(data, cb)
    data.insert = true
    
    vSERVER.insertOrUpdateCodigoPenal(data)
  end,

  ["onSelectRadialItem"] = function(data, cb)
    if radialFunctionsExec[data.key] then
      radialFunctionsExec[data.key]()

      if data.notRemoveFocus then return end
    end

    SetNuiFocus(false, false)
    nuiOpen = false
  end,

  ["getNearestPlayers"] = function(data, cb)
    print("getNearestPlayers")

    local players = vSERVER.getPlayersProximity()
    if players then cb(players) end
  end,

  ["getNearestOfficersPlayers"] = function(data, cb)
    print("getNearestOfficersPlayers")

    local players = vSERVER.getPlayersOfficersProximity()
    if players then cb(players) end
  end,
}

Citizen.CreateThread(function()
  for i, handler in pairs(registerNUICallbacks) do  
    RegisterNUICallback(i, function(data, cb)
      handler(data, cb)
    end)
  end

  while true do
    Citizen.Wait(5)

    if IsControlPressed(0, 38) and not nuiOpen then
      SetNuiFocus(true, true)

      SendNUIMessage({ action = "openRadial", data = radialOptions })
      SetCursorLocation(0.5, 0.5)

      nuiOpen = true
    end
  end
end)

function src.markOfficerOnMap(ped, name)
  ped = GetPlayerPedScriptIndex(GetPlayerFromServerId(ped))
  local blipOfficer = AddBlipForEntity(ped)

  SetBlipSprite(blipOfficer, 458)
  SetBlipColour(blipOfficer, 3)
  SetBlipScale(blipOfficer, 0.7)
  SetBlipAsShortRange(blipOfficer, false)
  SetBlipRoute(blipOfficer, true)
  BeginTextCommandSetBlipName("STRING")
  AddTextComponentString(name)
  EndTextCommandSetBlipName(blipOfficer)
end

function src.atualizarChatOrg(chat)
    SendNUIMessage({
        type = 'updateChatOrg',
        chat = chat
    })
end