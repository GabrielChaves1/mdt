zof = {
    getUserSource = function(user_id)
        return vRP.getUserSource(parseInt(user_id))
    end,
    
    getUserId = function(source)
        return vRP.getUserId(source)
    end,

    getUserIdentity = function(user_id) 
        return vRP.getUserIdentity(user_id)
    end,

    getName = function(id)
        local identity = zof.getUserIdentity(id)

        if identity then
            return identity.name .. " " .. identity.firstname
        end

        return false
    end,

    prepare = function(name, query)
        return vRP._prepare(name, query)
    end,

    query = function(name, data)
        return vRP.query(name, data)
    end,
    
    execute = function(name, data)
        return vRP.execute(name, data)
    end,
}