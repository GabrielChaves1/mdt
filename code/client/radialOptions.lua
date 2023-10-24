radialFunctionsExec = {
    ["algemar"] = function()
        print("algemar player proximo")
    end,

    ["abrir_tablet"] = function()
        print("open tablet")
        
        SetNuiFocus(true, true)
        SendNUIMessage({ action = "setVisible", data = true })
    end,
}