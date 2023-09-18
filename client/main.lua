RegisterCommand("test", function()
  SetNuiFocus(true, true)
  SendNUIMessage({ action = "setVisible", data = true })
end)

RegisterNUICallback("close", function(_,cb)
  SetNuiFocus(false, false)
  cb(true)
end)