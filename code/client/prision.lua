RegisterCommand("tp", function()
    cutseneMugshot()
end)

RegisterCommand("jail", function(source, args)
    vSERVER.arrestBandit({ 
        banditUserId = args[1], 
        time = args[2], 
        codigos_penais = {},
        descricao = "Prisão teste pelo comando JAIL",
        oficiais = {},
        imgs = {}
    })
end)

RegisterCommand("unjail", function(source, args)
    src.unArrested()
end)

RegisterCommand("tf", function(source, args)
    takePhoteFromCell(function(img)
        print("takePhoteFromCell", img)
    end)
end)

configsPrision = {
    cdsPlayer = { 402.87, -996.71, -99.00, 183.84 },
    cdsOfficer = { 402.98, -1000.26, -99.00, 7.54 },

    cdsSpawnPrision = {
        { 1683.74, 2500.32, 45.55 - 0.5, 58.72 }
    },

    cdsSpawnLiberation = { 1846.33, 2585.92, 45.67, 272.82 },

    cams = {
        ["firstCam"] = {
            pos = { 402.92, -997.78, -98.51 },
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

function src.cutseneMugshot(details)
    DoScreenFadeOut(250)
    Citizen.Wait(1000)

	local playerPed = PlayerPedId()
    
	local CitizenId = details.time
	local nameStuck = details.name
	local date = details.date
    local cityName = details.nameCity
    local timeJail = playerPed

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
    local firstCam = configsPrision.cams["firstCam"]

	SetCamCoord(camCutsene, firstCam.pos[1], firstCam.pos[2], firstCam.pos[3])
    SetCamRot(camCutsene, firstCam.rot[1], firstCam.rot[2], firstCam.rot[3])

    RenderScriptCams(1, 0, 0, 1, 1)

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

	SetEntityCoords(playerPed, configsPrision.cdsPlayer[1], configsPrision.cdsPlayer[2], configsPrision.cdsPlayer[3] - 1.0)
	SetEntityHeading(playerPed, configsPrision.cdsPlayer[4])
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

    Citizen.Wait(1000)

    DoScreenFadeIn(1000)
    Citizen.Wait(1000)

    mugShootSave(details)
    Citizen.Wait(7000)

    local pedOfficer = GetPlayerPedScriptIndex(GetPlayerFromServerId(details.pedOfficer))
	local pedPolice = ClonePed(pedOfficer, false, false, false)

    SetEntityCoords(pedPolice, configsPrision.cdsOfficer[1], configsPrision.cdsOfficer[2], configsPrision.cdsOfficer[3] - 1.0)
	SetEntityHeading(pedPolice, configsPrision.cdsOfficer[4])
    
    TaskStartScenarioInPlace(pedPolice, "WORLD_HUMAN_PAPARAZZI", 0, false)

    local camCutseneTwo = CreateCam("DEFAULT_SCRIPTED_CAMERA", 1)
    local photoCam = configsPrision.cams["photoCam"]

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

    cutseneInPrision(playerPed)
    renderHandle = nil
end

function cutseneInPrision(playerPed)
    local cdsSp = configsPrision.cdsSpawnPrision[1]
    TaskStartScenarioAtPosition(playerPed, "PROP_HUMAN_SEAT_BENCH", cdsSp[1], cdsSp[2], cdsSp[3], cdsSp[4], 0, false, true)

    local camCutseneSky = CreateCam("DEFAULT_SCRIPTED_CAMERA", 1)
    local skyCam = configsPrision.cams["skyCam"]

	SetCamCoord(camCutseneSky, skyCam.pos[1], skyCam.pos[2], skyCam.pos[3])
    SetCamRot(camCutseneSky, skyCam.rot[1], skyCam.rot[2], skyCam.rot[3])

    RenderScriptCams(1, 0, 0, 1, 1)

    DoScreenFadeIn(250)
    Citizen.Wait(3000)

    RenderScriptCams(0, 1, 4000, 0, 0)

    Citizen.Wait(7000)
    
    DestroyCam(camCutseneSky)
    SetFocusEntity(playerPed)
    
    ClearPedTasks(playerPed)
    FreezeEntityPosition(playerPed, false)
end

function mugShootSave(details)
    if webhook.saveImagesScreenShotBasic then
        exports['screenshot-basic']:requestScreenshotUpload(tostring(webhook.saveImagesScreenShotBasic), 'files[]', { encoding = 'png' }, function(data)
            local Response = json.decode(data)
            local imageURL = Response.attachments[1].url

            details.mugshot = imageURL
            table.insert(details.imgs, imageURL)

            vSERVER.registerArrestBandit(details)
        end)
    end
end

function src.createThreadIsArrested(time)
    timeArrest = parseInt(time)
    local countSaveInfo = 1

    local playerPed = PlayerPedId()
    local cdsSp = configsPrision.cdsSpawnPrision[1]

    Citizen.CreateThread(function()
        while timeArrest > 0 do
            print("restam " .. timeArrest .. " minutos de prisão")
            
            if GetDistanceBetweenCoords(GetEntityCoords(playerPed), vector3(cdsSp[1], cdsSp[2], cdsSp[3]), false) > 50 then
                DoScreenFadeOut(250)
                Citizen.Wait(1000)

                SetEntityCoords(playerPed, cdsSp[1], cdsSp[2], cdsSp[3])
	            SetEntityHeading(playerPed, cdsSp[4])

                cutseneInPrision(playerPed)

                print("você foi pego tentando fugir da prisão")
            end

            Citizen.Wait(60000)
            
            timeArrest = timeArrest - 1
            countSaveInfo = countSaveInfo + 1

            if countSaveInfo > 5 then 
                vSERVER.updateTimeArrested(timeArrest)
                countSaveInfo = 1
            end
        end

        src.unArrested()
    end)
end

function src.unArrested()
    local playerPed = PlayerPedId()
    
    timeArrest = 0
    vSERVER.updateTimeArrested(0)

    DoScreenFadeOut(250)
    Citizen.Wait(1000)

    SetEntityCoords(playerPed, configsPrision.cdsSpawnLiberation[1], configsPrision.cdsSpawnLiberation[2], configsPrision.cdsSpawnLiberation[3])
    SetEntityHeading(playerPed, configsPrision.cdsSpawnLiberation[4])

    DoScreenFadeIn(250)
    Citizen.Wait(1000)
end