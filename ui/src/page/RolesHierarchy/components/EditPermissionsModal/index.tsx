import * as S from './styles';
import { Search } from 'lucide-react';
import Modal from '@/components/Modal';
import { forwardRef, useState } from 'react';
import { ModalHostProps, ModalRootHandles } from '@/components/Modal/ModalRoot';
import { TextField } from '@/components/TextField';
import Switch from '@/components/Switch';
import Button from '@/components/Button';
import GroupHierarchy from '@/types/GroupHierarchy';
import fetchNui from '@/utils/fetchNui';
import Permission from '@/types/Permission';
import Loading from '@/components/Loading';

const EditPermissionsModal = forwardRef<ModalRootHandles, ModalHostProps>(({ onClose }, ref) => {
  const [ role, setRole ] = useState<GroupHierarchy>({} as GroupHierarchy);
  const [ permissions, setPermissions ] = useState<Permission[]>([]);
  const [ selectedPermissions, setSelectedPermissions ] = useState<string[]>([]);

  async function onOpen(data: { group: GroupHierarchy }) {
    var _role = data?.group;
    setRole(_role);

    const perms = await fetchNui<Permission[]>("getPermissionsGroup", _role?.group, [
      {
        index: 'teste',
        display: 'Promover',
        description: 'Promover Membros',
        active: true
      }
    ])
    if(perms.length <= 0) return;

    perms.forEach(perm => {
      if(perm.active) setSelectedPermissions((prevState) => [...prevState, perm.index]);
    });

    setPermissions(perms);
  }

  function handleSubmit() {
    var dict: { [k: string]: boolean } = {}
    selectedPermissions.forEach(perm => { dict[perm] = true });

    fetchNui("insertOrUpdatePermissionsGroup", { perms: dict, cargo: role?.group, org: role?.org });

    setSelectedPermissions([])
    onClose();
  }

  function handleManagePermissions(checked: boolean, index: string) {
    const indexPerm = permissions.findIndex(el => el.index === index);

    let _permissions = [...permissions];
    _permissions[indexPerm].active = checked;
    setPermissions(_permissions);

    if(checked) {
      setSelectedPermissions((prevState) => [...prevState, index]);
      return;
    }

    const _selectedPermissions = _permissions.filter(x => x.active).map(x => x.index);
    setSelectedPermissions(_selectedPermissions);
  }

  return (
    <Modal.Root onOpen={onOpen} ref={ref}>
      <Modal.Header title={`Editar Permissões | ${role?.display}`} subtitle='Aqui você poderá editar as permissões do cargo selecionado' />
      <Modal.Content>
        <S.Column>
          <TextField placeholder='Pesquisar...' icon={Search} />
          <S.PermissionsList>
            {permissions ? (
              permissions?.map((perm) => (
                <S.Permission>
                  <S.PermissionTitleArea>
                    <p>{perm?.display}</p>
                    <span>{perm?.description}</span>
                  </S.PermissionTitleArea>
                  <Switch 
                    checked={perm.active}
                    onCheckedChange={(checked) => handleManagePermissions(checked, perm.index)}
                  />
                </S.Permission>
              ))
            ) : (
              <Loading />
            )}
          </S.PermissionsList>

          <S.Actions>
            <Button onClick={handleSubmit}>Salvar Alterações</Button>
          </S.Actions>
        </S.Column>
      </Modal.Content>
    </Modal.Root>
  )
})

export default EditPermissionsModal;