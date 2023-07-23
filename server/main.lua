mdt = {}

Tunnel = module("lib/Tunnel")
Proxy = module("lib/Proxy")
vRP = Proxy.getInterface("vRP")

Tunnel.bindInterface(GetCurrentResourceName())