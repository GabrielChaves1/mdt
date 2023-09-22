-- RegisterCommand("tp", function()
--     -- Cutscene()
--     cutseneMugshot()
-- end)

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

function createCamAndSetPosition()
    local drawTxt = function(text, font, x, y, scale, r, g, b, a)
        SetTextFont(font)
        SetTextScale(scale, scale)
        SetTextColour(r, g, b, a)
        SetTextOutline()
        SetTextCentre(1)
        SetTextEntry("STRING")
        AddTextComponentString(text)
        DrawText(x, y)
    end

    -- { 402.70, -998.32, -98.99, 88.67 },
    -- { 401.46, -1005.22, -98.07, 170.27 },


    local ped = PlayerPedId()
    -- local x, y, z = table.unpack({ 402.92, -998.78, -98.51 })
    local x, y, z = table.unpack({ 1515.37, 2684.55, 189.24 })

	local camId = CreateCam("DEFAULT_SCRIPTED_CAMERA", true)

    SetCamCoord(camId, x, y, z)
	SetCamRot(camId, 0.0, 0.0, -10.0)

	RenderScriptCams(true, false, 0, true, true)
end

configCutsene = {
    cdsPlayer = { 402.87, -996.71, -99.00, 183.84 },
    cdsOfficer = { 402.98, -1000.26, -99.00, 7.54 },
    cdsSpawnPrision = {
        { 1683.74, 2500.32, 45.55 - 0.5, 58.72 }
    },

    cams = {
        ["firstCam"] = {
            pos = { 402.92, -998.78, -98.51 },
            rot = { 0.0, 0.0, 0.0 }
        },
    
        ["photoCam"] = {
            pos = { 401.87, -1002.86, -98.1 },
            rot = { 0.0, 0.0, -10.0 }
        },

        ["skyCam"] = {
            pos = { 1515.37, 2684.55, 189.24 },
            rot = { -35.0, 0.0, -120.0 }
        },
    },
}

function cutseneMugshot()
    DoScreenFadeOut(250)
    Citizen.Wait(250)

	local playerPed = PlayerPedId()
    
	local CitizenId = playerPed
	local nameStuck = "TH ZO"
	local date = "21/09/2023"
    local cityName = "Pirituba ZO"
    local timeJail = 250

    local scaleFormBoard = LoadScale("mugshot_board_01")
    local renderHandle = CreateRenderModel("ID_Text", "prop_police_id_text")

	CreateThread(function()
        while renderHandle do
            HideHudAndRadarThisFrame()
            SetTextRenderId(renderHandle)
            Set_2dLayer(4)
            SetScriptGfxDrawBehindPausemenu(1)
            DrawScaleformMovie(scaleFormBoard, 0.405, 0.37, 0.81, 0.74, 255, 255, 255, 255, 0)
            SetScriptGfxDrawBehindPausemenu(0)
            SetTextRenderId(GetDefaultScriptRendertargetRenderId())
            SetScriptGfxDrawBehindPausemenu(1)
            SetScriptGfxDrawBehindPausemenu(0)

            Wait(0)
        end
    end)

	Citizen.Wait(250)

	BeginScaleformMovieMethod(scaleFormBoard, 'SET_BOARD')
    PushScaleformMovieMethodParameterString(cityName)
    PushScaleformMovieMethodParameterString(nameStuck)
    PushScaleformMovieMethodParameterString(CitizenId)
    PushScaleformMovieMethodParameterString(date)

    PushScaleformMovieFunctionParameterInt(0)
    PushScaleformMovieFunctionParameterInt(timeJail)
    PushScaleformMovieFunctionParameterInt(116)
    EndScaleformMovieMethod()

	local camCutsene = CreateCam("DEFAULT_SCRIPTED_CAMERA", 1)
    local firstCam = configCutsene.cams["firstCam"]

	SetCamCoord(camCutsene, firstCam.pos[1], firstCam.pos[2], firstCam.pos[3])
    SetCamRot(camCutsene, firstCam.rot[1], firstCam.rot[2], firstCam.rot[3])

    RenderScriptCams(1, 0, 0, 1, 1)

    DoScreenFadeIn(1000)
    Citizen.Wait(250)

	CreateThread(function()
        FreezeEntityPosition(playerPed, true)
        SetPauseMenuActive(false)

        while renderHandle do
            DisableAllControlActions(0)
            EnableControlAction(0, 249, true)
            EnableControlAction(0, 46, true)
            Wait(0)
        end
    end)

	SetEntityCoords(playerPed, configCutsene.cdsPlayer[1], configCutsene.cdsPlayer[2], configCutsene.cdsPlayer[3] - 1.0)
	SetEntityHeading(playerPed, configCutsene.cdsPlayer[4])
	FreezeEntityPosition(playerPed, true)

	LoadModel("prop_police_id_board")
	LoadModel("prop_police_id_text")

    local suspectCoods = GetEntityCoords(playerPed)
	local board = CreateObject("prop_police_id_board", suspectCoods, true, true, false)
	local boardOverlay = CreateObject("prop_police_id_text", suspectCoods, true, true, false)

	AttachEntityToEntity(boardOverlay, board, -1, 4103, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, false, false, false, false, 2, true)

	SetModelAsNoLongerNeeded("prop_police_id_board")
	SetModelAsNoLongerNeeded("prop_police_id_text")

    SetCurrentPedWeapon(playerPed, "weapon_unarmed", 1)
	ClearPedWetness(playerPed)
	ClearPedBloodDamage(playerPed)
	AttachEntityToEntity(board, playerPed, GetPedBoneIndex(playerPed, 28422), 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 2, 1)	

	LoadAnimDict("mp_character_creation@lineup@male_a")
	TaskPlayAnim(playerPed, "mp_character_creation@lineup@male_a", "loop_raised", 8.0, 8.0, -1, 49, 0, false, false, false)

    Citizen.Wait(7000)
    LoadModel("cs_casey")

	local pedPolice = ClonePed(playerPed, false, false, false)

    SetEntityCoords(pedPolice, configCutsene.cdsOfficer[1], configCutsene.cdsOfficer[2], configCutsene.cdsOfficer[3] - 1.0)
	SetEntityHeading(pedPolice, configCutsene.cdsOfficer[4])
    
    TaskStartScenarioInPlace(pedPolice, "WORLD_HUMAN_PAPARAZZI", 0, false)

    local camCutseneTwo = CreateCam("DEFAULT_SCRIPTED_CAMERA", 1)
    local photoCam = configCutsene.cams["photoCam"]

    SetCamCoord(camCutseneTwo, photoCam.pos[1], photoCam.pos[2], photoCam.pos[3])
    SetCamRot(camCutseneTwo, photoCam.rot[1], photoCam.rot[2], photoCam.rot[3])

    SetCamActiveWithInterp(camCutseneTwo, camCutsene, 3000, true, true)

    Citizen.Wait(10000)
    
	DoScreenFadeIn(100)

	Citizen.Wait(2000)

	DoScreenFadeOut(250)
    Citizen.Wait(2000)

	DeleteEntity(pedPolice)
	SetModelAsNoLongerNeeded(-1320879687)


    ClearPedTasksImmediately(playerPed)
    DeleteObject(board)
    DeleteObject(boardOverlay)

	RenderScriptCams(false,  false,  0,  true,  true)

	DestroyCam(camCutsene)
    DestroyCam(camCutseneTwo)

    local cdsSp = configCutsene.cdsSpawnPrision[1]
    TaskStartScenarioAtPosition(playerPed, "PROP_HUMAN_SEAT_BENCH", cdsSp[1], cdsSp[2], cdsSp[3], cdsSp[4], 0, false, true)

    local camCutseneSky = CreateCam("DEFAULT_SCRIPTED_CAMERA", 1)
    local skyCam = configCutsene.cams["skyCam"]

	SetCamCoord(camCutseneSky, skyCam.pos[1], skyCam.pos[2], skyCam.pos[3])
    SetCamRot(camCutseneSky, skyCam.rot[1], skyCam.rot[2], skyCam.rot[3])

    RenderScriptCams(1, 0, 0, 1, 1)

    DoScreenFadeIn(250)
    Citizen.Wait(3000)

    RenderScriptCams(0, 1, 4000, 0, 0)

    Citizen.Wait(7000)
    
    DestroyCam(camCutseneSky)
    SetFocusEntity(playerPed)

    renderHandle = nil
    ClearPedTasks(playerPed)
    FreezeEntityPosition(playerPed, false)
end

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