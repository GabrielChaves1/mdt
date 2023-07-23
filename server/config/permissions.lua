permissions = {}

permissions.list = {
  ["ADMIN"] = {
    id = "ADMIN",
    label = "Administrador",
    description = "Usuários com esta permissão terão todas as outras permissões"
  },
  ["MANAGE_WARNINGS"] = {
    id = "MANAGE_WARNINGS",
    label = "Gerenciar Avisos",
    description = "Usuários com esta permissão poderão criar/deletar avisos"
  },
}

function permissions:checkIfPermissionExists(permissionId)
  if not self.list then return false end

  if self.list[permissionId] then
    return true
  end
end