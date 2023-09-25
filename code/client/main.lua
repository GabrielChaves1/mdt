Tunnel = module("vrp", "lib/Tunnel")
Proxy = module("vrp", "lib/Proxy")

vRP = Proxy.getInterface("vRP")
vRPclient = Tunnel.getInterface("vRP")

src = {}
Tunnel.bindInterface(GetCurrentResourceName(), src)

vSERVER = Tunnel.getInterface(GetCurrentResourceName())

RegisterCommand("test", function()
  -- local infos = vSERVER.getInfosOpenPanel()

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

function src.atualizarChatOrg(chat)
    SendNUIMessage({
        type = 'updateChatOrg',
        chat = chat
    })
end