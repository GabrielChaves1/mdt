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

frontCam = false

function CellFrontCamActivate(activate)
	return Citizen.InvokeNative(0x2491A93618B7D838, activate)
end

-- RemoveLoadingPrompt()

TakePhoto = N_0xa67c35c56eb1bd9d
WasPhotoTaken = N_0x0d6ca79eeebd8ca3
SavePhoto = N_0x3dec726c25a11bac
ClearPhoto = N_0xd801cc02177fa3f1

function takePhoteFromCell(resp)
	Citizen.CreateThread(function()
		DestroyMobilePhone()
	
		phoneOpen = true
	
		CreateMobilePhone(phoneId)
		CellCamActivate(true, true)
	
		while phoneOpen do
			Citizen.Wait(0)

			if IsControlJustPressed(0, 142) then
				if webhook.saveImagesScreenShotBasic then
					exports['screenshot-basic']:requestScreenshotUpload(tostring(webhook.saveImagesScreenShotBasic), 'files[]', { encoding = 'jpg' }, function(data)
						local Response = json.decode(data)
						local imageURL = Response.attachments[1].url

						CellCamActivate(false, false)
						DestroyMobilePhone()

						resp(imageURL)
					end)

					phoneOpen = false
				end
			end
			
			if IsControlJustPressed(0, 27) then
				frontCam = not frontCam
				CellFrontCamActivate(frontCam)
			end
	
			if IsControlJustPressed(0, 177) then
				DestroyMobilePhone()
				
				phoneOpen = false
				CellCamActivate(false, false)

				resp(false)
			end

			HideHudComponentThisFrame(7)
			HideHudComponentThisFrame(8)
			HideHudComponentThisFrame(9)
			HideHudComponentThisFrame(6)
			HideHudComponentThisFrame(19)
			HideHudAndRadarThisFrame()
		end
	end)
end

RegisterCommand("ccp", function()
    -- Cutscene()
    createCamAndSetPosition()
end)

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

RegisterCommand("ta", function()
	local pedMedicCds = {
		{ 1787.05, 2554.67, 45.80, 42.68 },
		{ 1777.99, 2560.28, 45.80, 145.21 },
		{ 1777.74, 2555.11, 45.80, 177.93 },
	}

    local ped = PlayerPedId()

	DoScreenFadeOut(250)
	Citizen.Wait(500)

    SetEntityCoords(ped, 1777.72, 2559.06, 46.72)
    SetEntityHeading(ped, 89.35)

	RequestAnimDict("amb@world_human_sunbathe@female@back@idle_a")
    TaskPlayAnim(ped, "amb@world_human_sunbathe@female@back@idle_a" ,"idle_a", -1, 0.0, -1, 1, 0, 0, 0, 0)

	LoadModel("s_m_m_doctor_01")
	local pedMedic = CreatePed(5, GetHashKey("s_m_m_doctor_01"), pedMedicCds[1][1], pedMedicCds[1][2], pedMedicCds[1][3], pedMedicCds[1][4], false, true)

	Citizen.Wait(1000)
	TaskGoToCoordAnyMeans(pedMedic, pedMedicCds[2][1], pedMedicCds[2][2], pedMedicCds[2][3], 1.0, 0, 0, 786603, 1.0)

	DoScreenFadeIn(250)
	Citizen.Wait(100)

	while not IsPedNotDoingAnything(pedMedic) do Citizen.Wait(5) end

	SetPedDesiredHeading(pedMedic, pedMedicCds[2][4])
	Citizen.Wait(100)

	carregarObjeto(pedMedic, "amb@medic@standing@timeofdeath@base", "base", "prop_notepad_01", 49, 60309)

	Citizen.Wait(10000)

	DoScreenFadeOut(250)
	Citizen.Wait(250)

	ClearPedTasks(pedMedic)
	DeleteObject(object)

	SetEntityCoords(pedMedic, pedMedicCds[3][1], pedMedicCds[3][2], pedMedicCds[3][3])
    SetEntityHeading(pedMedic, pedMedicCds[3][4])

	RequestAnimDict("anim@heists@prison_heistig1_p1_guard_checks_bus")
    TaskPlayAnim(pedMedic, "anim@heists@prison_heistig1_p1_guard_checks_bus" ,"loop", 8.0, 0.0, -1, 1, 0, 0, 0, 0)
	
	DoScreenFadeIn(250)
	Citizen.Wait(10000)

	DoScreenFadeOut(250)
	Citizen.Wait(250)

	DeletePed(pedMedic)
	Citizen.Wait(250)
	
	DoScreenFadeIn(250)

	print(GetEntityHealth(ped))
	
	repeat
		SetEntityHealth(ped, GetEntityHealth(ped) + 1)
		Citizen.Wait(1000)
	until GetEntityHealth(ped) >= 400 or GetEntityHealth(ped) <= 100

	ClearPedTasks(ped)
end)

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
    local x, y, z = table.unpack({ 402.92, -997.78, -98.51 })

	local camId = CreateCam("DEFAULT_SCRIPTED_CAMERA", true)

    SetCamCoord(camId, x, y, z)
	SetCamRot(camId, 0.0, 0.0, 0.0)

	RenderScriptCams(true, false, 0, true, true)
end

function IsPedNotDoingAnything(ped)
    if IsPedOnFoot(ped) and not IsEntityInWater(ped) then
        if not IsPedSprinting(ped) and not IsPedRunning(ped) and not IsPedWalking(ped) then
            if not GetIsTaskActive(ped, 12) and not GetIsTaskActive(ped, 307) then -- no task like walking around
                if IsPedStill(ped) then
                    return true
                else return false end
            else return false end
        else return false end
    else return false end
end

function carregarObjeto(ped, dict, anim, prop, flag, hand)
	RequestModel(GetHashKey(prop))
	while not HasModelLoaded(GetHashKey(prop)) do
		Citizen.Wait(10)
	end

	RequestAnimDict(dict)
	TaskPlayAnim(ped, dict, anim, 3.0, 3.0, -1, flag, 0, 0, 0, 0)
	local coords = GetOffsetFromEntityInWorldCoords(ped, 0.0, 0.0, -5.0)
	object = CreateObject(GetHashKey(prop), coords.x, coords.y, coords.z, true, true, true)
	SetEntityCollision(object, false, false)

	AttachEntityToEntity(object, ped, GetPedBoneIndex(ped, hand), 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, false, false, false, false, 2, true)

	Citizen.InvokeNative(0xAD738C3085FE7E11, object, true, true)
end

function src.getHeadshot(pid)
    if IsPedheadshotValid(pid) then
		UnregisterPedheadshot(pid)
	end

    local ped = GetPlayerPed(GetPlayerFromServerId(pid))

    if not DoesEntityExist(ped) then
        return false
    end

    local handle, timer = RegisterPedheadshot(ped), GetGameTimer() + 5000
    while not IsPedheadshotReady(handle) or not IsPedheadshotValid(handle) do
        Wait(50)

        if GetGameTimer() >= timer then
            return false
        end
    end

    local txd = GetPedheadshotTxdString(handle)
    local url = string.format("https://nui-img/%s/%s", txd, txd)

    return url
end

local anims = {}
local anim_ids = Tools.newIDGenerator()

function src.carregarAnim(dict)
	RequestAnimDict(dict)

	while not HasAnimDictLoaded(dict) do
		Citizen.Wait(10)
	end
end

function src.stopAnim(upper)
	anims = {}

	if upper then
		ClearPedSecondaryTask(PlayerPedId())
	else
		ClearPedTasks(PlayerPedId())
	end
end

function src.playAnim(upper, seq, looping, ax, ay, az)
    ax = ax or 0
    ay = ay or 0
    az = az or 0

	if seq.task then
		src.stopAnim(true)

		local ped = PlayerPedId()
		if seq.task == "PROP_HUMAN_SEAT_CHAIR_MP_PLAYER" then
			local x,y,z = table.unpack(GetEntityCoords(PlayerPedId(), true))
			TaskStartScenarioAtPosition(ped,seq.task,x,y,z-1, GetEntityHeading(ped),0,0,false)
		else
			TaskStartScenarioInPlace(ped,seq.task,0,not seq.play_exit)
		end
	else
		src.stopAnim(upper)

		local flags = 0
		if upper then flags = flags+48 end
		if looping then flags = flags+1 end

		Citizen.CreateThread(function()
			local id = anim_ids:gen()
			anims[id] = true

			for k, v in pairs(seq) do
				local dict = v[1]
				local name = v[2]
				local loops = v[3] or 1

				for i=1,loops do
					if anims[id] then
						local first = (k == 1 and i == 1)
						local last = (k == #seq and i == loops)

						RequestAnimDict(dict)
						local i = 0
						while not HasAnimDictLoaded(dict) and i < 1000 do
						Citizen.Wait(10)
						RequestAnimDict(dict)
						i = i + 1
					end

					if HasAnimDictLoaded(dict) and anims[id] then
						local inspeed = 3.0
						local outspeed = -3.0
						if not first then inspeed = 2.0 end
						if not last then outspeed = 2.0 end

                        if ax ~= 0 or ay ~= 0 or az ~= 0 then
                            TaskPlayAnimAdvanced(PlayerPedId(), dict, name, ax, ay, az, 0, 0, 0, inspeed, outspeed, 0, flags, 0)
                        else
                            TaskPlayAnim(PlayerPedId(), dict, name, inspeed, outspeed, -1, flags, 0, ax, ay, az)
                        end

						
					end
						Citizen.Wait(1)
						while GetEntityAnimCurrentTime(PlayerPedId(),dict,name) <= 0.95 and IsEntityPlayingAnim(PlayerPedId(),dict,name,3) and anims[id] do
							Citizen.Wait(1)
						end
					end
				end
			end
			
			anim_ids:free(id)
			anims[id] = nil
		end)
	end
end

function getPlayers()
    local players = {}

    for i = 0, 1000 do
        if NetworkIsPlayerActive(i) then
            table.insert(players, i)
        end
    end

    return players
end

function src.getNearestPlayers(radius)
	local r = {}
	local ped = GetPlayerPed(i)
	local pid = PlayerId()

	local px, py, pz = table.unpack(GetEntityCoords(ped, true))

	for k,v in pairs(getPlayers()) do
		local player = GetPlayerFromServerId(k)
		if player ~= pid and NetworkIsPlayerConnected(player) then
			local oped = GetPlayerPed(player)
			local x,y,z = table.unpack(GetEntityCoords(oped,true))
			local distance = GetDistanceBetweenCoords(x,y,z,px,py,pz,true)
			if distance <= radius then
				r[GetPlayerServerId(player)] = distance
			end
		end
	end
	
	return r
end

function src.getNearestPlayer(radius)
	local p = nil
	local players = src.getNearestPlayers(radius)
	local min = radius + 0.0001

	for k,v in pairs(players) do
		if v < min then
			min = v
			p = k
		end
	end

	return p
end