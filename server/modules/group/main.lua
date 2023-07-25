mdt.groups = {}

mdt.groups.createGroup = function()
  local userId = vRP.getUserId(source) or 1
  if not userId then return end

  local group = {
    name = "Comandante Geral",
    permissions = {
      "ADMIN",
    }
  }

  if type(group.name) ~= "string" then return end
  if type(group.permissions) ~= "table" then return end 

  for k,v in ipairs(group.permissions) do
    if not permissions:checkIfPermissionExists(v) then
      return
    end
  end

  local id = MySQL.insert.await('INSERT INTO `mdt_groups` (name, permissions) VALUES (@name, @permissions)', {
    name = group.name,
    permissions = json.encode(group.permissions)
  })
end