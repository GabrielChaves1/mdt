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
}

Citizen.CreateThread(function()
  for i, handler in pairs(registerNUICallbacks) do
      RegisterNUICallback(i, handler)
  end
end)