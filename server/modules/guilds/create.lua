mdt.guilds.create = function(source, args, rawCommand)
  local name, image, objective = "Test", "https://google.com.br", "Patrulhar"

  if not IsPlayerAceAllowed(source, "mdt.master") then return print("Apenas usuários MASTER conseguem criar guilds") end
  if type(name) ~= "string" then return end
  if type(image) ~= "string" then return end
  if type(objective) ~= "string" then return end

  local guildAlreadyExists = MySQL.query.await('SELECT * FROM `mdt_guilds` WHERE name = @name LIMIT 1', {
    name = name
  })

  if(guildAlreadyExists[1]) then 
    print("Guild já existe")
    return 
  end

  local id = MySQL.insert.await('INSERT INTO `mdt_guilds` (name, image, objective) VALUES (@name, @image, @objective)', {
    name = "PMERJ",
    image = "https://google.com.br",
    objective = "Patrulhar pela cidade e manter a ordem"
  })
end

RegisterCommand("createGuild", mdt.guilds.create)