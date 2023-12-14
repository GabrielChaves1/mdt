function src.handcuffNearestPlayer()
    local source = source
	local user_id = zof.getUserId(source)
	local nplayer = vCLIENT.getNearestPlayer(source, 2)

	if nplayer then
        if vCLIENT.isHandcuffed(nplayer) then
            TriggerClientEvent('carregar',nplayer,source)
            vRPclient._playAnim(source,false,{{"mp_arrest_paired","cop_p2_back_left"}},false)
            vRPclient._playAnim(nplayer,false,{{"mp_arrest_paired","crook_p2_back_left"}},false)

        
            SetTimeout(3500,function()
                vRPclient._stopAnim(source,false)
                vCLIENT.toggleHandcuff(nplayer)
                TriggerClientEvent('carregar',nplayer,source)
                TriggerClientEvent('cancelando',source,false)
                TriggerClientEvent('cancelando',nplayer,false)
                TriggerClientEvent("vrp_sound:source",source,'cuff',0.1)
                TriggerClientEvent("vrp_sound:source",nplayer,'cuff',0.1)
                TriggerClientEvent('setalgemas',nplayer)
            end)
        end
    end
end

function src.getInventoryPlayer(user_id)
    local source = source

    if not user_id then
        user_id = vRP.getUserId(source)
    else
        source = vRP.getUserSource(user_id)
    end

    local guns = vRPclient.getWeapons(source)
    local datatable = vRP.getUserDataTable(user_id)
    local inventory = {}

    if datatable and datatable.inventory then
        for k, v in pairs(datatable.inventory) do
            table.insert(inventory, { 
                nameItem = k,
                nameFormat = vRP.itemNameList(k),
                image = "http://asda/".. vRP.itemIndexList(k) ..".png", 
                amount = v.amount
            })
        end
    end

    if guns then
        for k, v in pairs(guns) do
            table.insert(inventory, {
                nameItem = "wbody|" .. k,
                nameFormat = vRP.itemNameList("wbody|" .. k),
                image = "http://asdasd/"..vRP.itemIndexList("wbody|" .. k)..".png",
                amount = 1
            })
        end
    end

    return inventory
end