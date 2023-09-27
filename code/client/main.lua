Tunnel = module("vrp", "lib/Tunnel")
Proxy = module("vrp", "lib/Proxy")

vRP = Proxy.getInterface("vRP")
vRPclient = Tunnel.getInterface("vRP")

src = {}
Tunnel.bindInterface(GetCurrentResourceName(), src)

vSERVER = Tunnel.getInterface(GetCurrentResourceName())

RegisterCommand("test", function()
  SetNuiFocus(true, true)
  SendNUIMessage({ action = "setVisible", data = true })
end)

local registerNUICallbacks = {
  ["close"] = function(data, cb)
    SetNuiFocus(false, false)
    cb(true)
  end,

  ["getInitialData"] = function(data, cb)
    local resp = vSERVER.getInitialData()
    cb(resp)
  end,

  ["getOnlineOfficers"] = function(data, cb)
    local resp = vSERVER.getOnlineOfficers()
    cb(resp)
  end,

  ["markOfficerOnMap"] = function(data, cb)
    local resp = vSERVER.markOfficerOnMap(data)
    cb(resp)
  end,

  ["getPrisions"] = function(data, cb)
    local resp = vSERVER.getPrisions()
    cb(resp)
  end,

  ["createNotice"] = function(data, cb)
    local resp = vSERVER.createWarningOrg(data)
    cb(resp)
  end,

  ["getMessagesChatOrg"] = function(data, cb)
    local resp = vSERVER.getMessagesChatOrg(data.org)
    cb(resp)
  end,

  ["sendMessageChatOrg"] = function(data, cb)
    local resp = vSERVER.sendMessageChatOrg(data.msg, data.org)
    cb(resp)
  end,
}

Citizen.CreateThread(function()
  for i, handler in pairs(registerNUICallbacks) do 
    RegisterNUICallback(i, function(data, cb)
      handler(data, cb)
    end)
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