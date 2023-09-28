import * as S from './styles';
import { Search } from 'lucide-react';
import Modal from '@/components/Modal';
import { forwardRef, useState } from 'react';
import { ModalRootHandles } from '@/components/Modal/ModalRoot';
import { TextField } from '@/components/TextField';
import Switch from '@/components/Switch';
import Button from '@/components/Button';
import GroupHierarchy from '@/types/GroupHierarchy';
import fetchNui from '@/utils/fetchNui';
import Permission from '@/types/Permission';
import Loading from '@/components/Loading';

const EditPermissionsModal = forwardRef<ModalRootHandles>((_, ref) => {
  const [ role, setRole ] = useState<GroupHierarchy>({} as GroupHierarchy);
  const [ permissions, setPermissions ] = useState<Permission[]>([] as Permission[]);
  const [ selectedPermissions, setSelectedPermissions ] = useState<string[]>([]);

  async function onOpen(data: { group: GroupHierarchy }) {
    var dataGroup = data?.group;
    setRole(dataGroup);

    const perms = await fetchNui("getPermissionsGroup", dataGroup?.group) as Permission[]
    if(perms.length <= 0) return;

    setPermissions(perms);
  }

  function handleSubmit() {
    fetchNui("insertOrUpdatePermissionsGroup", { perms: selectedPermissions, cargo: role?.group, org: role?.org });
    // ref.current?.closeModal();
  }

  function handleManagePermissions(checked: boolean, id: string) {
    if(checked) {
      setSelectedPermissions([...selectedPermissions, id]);
      return;
    }

    const index = selectedPermissions.findIndex(el => el === id);
    const _selectedPermissions = selectedPermissions.splice(index, 1);
    setSelectedPermissions(_selectedPermissions);
  }

  return (
    <Modal.Root onOpen={onOpen} ref={ref}>
      <Modal.Header title={`Editar Permissões | ${role?.display}`} subtitle='Aqui você poderá editar as permissões do cargo selecionado' />
      <Modal.Content>
        <S.Column>
          <TextField placeholder='Pesquisar...' icon={Search} />
          <S.PermissionsList>
            { permissions ? (
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