function LoadModel(model)
    RequestModel(GetHashKey(model))
    while not HasModelLoaded(GetHashKey(model)) do
        Wait(0)
    end
end

function LoadAnimDict(dict)
    while (not HasAnimDictLoaded(dict)) do
        RequestAnimDict(dict)
        Wait(0)
    end
end

function LoadScale(scalef)
	local handle = RequestScaleformMovie(scalef)
    while not HasScaleformMovieLoaded(handle) do
        Wait(0)
    end
	return handle
end

function CreateRenderModel(name, model)
	local handle = 0
	if not IsNamedRendertargetRegistered(name) then
		RegisterNamedRendertarget(name, 0)
	end
	if not IsNamedRendertargetLinked(model) then
		LinkNamedRendertarget(model)
	end
	if IsNamedRendertargetRegistered(name) then
		handle = GetNamedRendertargetRenderId(name)
	end
	return handle
end

-- RegisterCommand("ccp", function()
--     -- Cutscene()
--     createCamAndSetPosition()
-- end)

-- RegisterCommand("ta", function()
--     local ped = PlayerPedId()

--     -- SetEntityCoords(ped, 1683.74, 2500.32, 45.55 - 1.45)
--     -- SetEntityHeading(ped, 58.72)

--     -- FreezeEntityPosition(ped, true)

--     -- RequestAnimDict("amb@prop_human_seat_chair@male@left_elbow_on_knee@idle_a")
--     -- TaskPlayAnim(ped, "amb@prop_human_seat_chair@male@left_elbow_on_knee@idle_a" ,"idle_a", 8.0, -1, -1, 1, 0, 0, 0, 0)

--     -- Citizen.Wait(5000)

--     -- ClearPedTasks(ped)

--     -- RequestAnimDict("amb@prop_human_seat_chair@male@left_elbow_on_knee@react_aggressive")
--     -- TaskPlayAnim(ped, "amb@prop_human_seat_chair@male@left_elbow_on_knee@react_aggressive" ,"exit_forward", 8.0, 8.0, -1, 0, 0, 0, 0, 0)

--     TaskStartScenarioAtPosition(ped, "PROP_HUMAN_SEAT_BENCH", 1683.74, 2500.32, 45.55 - 0.5, 58.72, 0, false, true)

--     Citizen.Wait(3000)

--     -- ClearPedTasks(ped)
--     -- FreezeEntityPosition(ped, false)
-- end)

-- function createCamAndSetPosition()
--     local drawTxt = function(text, font, x, y, scale, r, g, b, a)
--         SetTextFont(font)
--         SetTextScale(scale, scale)
--         SetTextColour(r, g, b, a)
--         SetTextOutline()
--         SetTextCentre(1)
--         SetTextEntry("STRING")
--         AddTextComponentString(text)
--         DrawText(x, y)
--     end

--     -- { 402.70, -998.32, -98.99, 88.67 },
--     -- { 401.46, -1005.22, -98.07, 170.27 },


--     local ped = PlayerPedId()
--     -- local x, y, z = table.unpack({ 402.92, -998.78, -98.51 })
--     local x, y, z = table.unpack({ 1515.37, 2684.55, 189.24 })

-- 	local camId = CreateCam("DEFAULT_SCRIPTED_CAMERA", true)

--     SetCamCoord(camId, x, y, z)
-- 	SetCamRot(camId, 0.0, 0.0, -10.0)

-- 	RenderScriptCams(true, false, 0, true, true)
-- end