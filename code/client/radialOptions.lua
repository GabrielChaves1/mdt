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

local handcuffed = false
function src.isHandcuffed()
	return handcuffed
end

function src.toggleHandcuff()
    local ped = PlayerPedId()

    handcuffed = not handcuffed
	SetEnableHandcuffs(ped, handcuffed)

    function animation(other)
        local pedOther = GetPlayerPed(GetPlayerFromServerId(other))

        Citizen.CreateThread(function()
            while carregando do
                Citizen.Wait(1)
                Citizen.InvokeNative(0x6B9BBD38AB0796DF, ped, pedOther, 4103, 11816, 0.48, 0.0, 0.0, 0.0, 0.0, 0.0, false, false, false, false, 2, true)
            end

            DetachEntity(ped, true, false)
            carregando = false
        end)

        vRPclient._playAnim(source, false, {{"mp_arrest_paired","cop_p2_back_left"}}, false)
		vRPclient._playAnim(nplayer, false, {{"mp_arrest_paired","crook_p2_back_left"}}, false)

        src.playAnim(false, {{ "mp_arresting", "a_uncuff" }}, false)
    end

	if handcuffed then
        carregando = true

        src.playAnim(true, {{ "mp_arresting", "idle" }}, true)
        local model = GetEntityModel(ped)

        if model == GetHashKey("mp_m_freemode_01") then SetPedComponentVariation(ped, 7, 41, 0, 2)
        elseif model == GetHashKey("mp_f_freemode_01") then SetPedComponentVariation(ped, 7, 25, 0, 2) end
    else 
        src.stopAnim(true)
        SetPedComponentVariation(ped, 7, 0, 0, 2)
    end
end