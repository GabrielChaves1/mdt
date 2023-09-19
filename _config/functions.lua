zof = {
    getUserSource = function(user_id)
        return vRP.getUserSource(parseInt(user_id))
    end,
    
    getUserId = function(source)
        return vRP.getUserId(source)
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