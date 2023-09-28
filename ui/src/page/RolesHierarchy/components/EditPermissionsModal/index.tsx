import * as S from './styles';
import { Search } from 'lucide-react';
import Modal from '@/components/Modal';
import { forwardRef, useState } from 'react';
import { ModalRootHandles } from '@/components/Modal/ModalRoot';
import { TextField } from '@/components/TextField';
import Switch from '@/components/Switch';
import Button from '@/components/Button';
import GroupHierarchy from '@/types/GroupHierarchy';
import { useQuery } from '@tanstack/react-query';
import fetchNui from '@/utils/fetchNui';
import Permission from '@/types/Permission';
import Loading from '@/components/Loading';

const EditPermissionsModal = forwardRef<ModalRootHandles>((_, ref) => {
  const [ group, setGroup ] = useState<GroupHierarchy>({} as GroupHierarchy);
  const [ permissions, setPermissions ] = useState<Permission[]>([] as Permission[]);

  async function onOpen(data: { group: GroupHierarchy }) {
    var dataGroup = data?.group
    setGroup(dataGroup);

    const perms = await fetchNui("getPermissionsGroup", dataGroup?.group) as Permission[]
    if(perms.length <= 0) return;

    setPermissions(perms);
  }

  function sendPermissionsPlayer() {
    var perms = [] as string[]

    permissions.forEach(perm => {
      if(perm.active)
        perms.push(perm.index)
    });

    fetchNui("insertOrUpdatePermissionsGroup", { perms: perms, cargo: group?.group, org: group?.org });
    // ref.current?.closeModal();
  }

  return (
    <Modal.Root onOpen={onOpen} ref={ref}>
      <Modal.Header title={`Editar Permissões | ${group?.display}`} subtitle='Aqui você poderá editar as permissões do cargo selecionado' />
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
                    value={perm.active ? 1 : 0}
                    onCheckedChange={(checked) => {
                      perm.active = !checked;
                    }}
                  />
                </S.Permission>
              ))
            ) : (

              <Loading />
            )}
          </S.PermissionsList>

          <S.Actions>
            <Button onClick={() => sendPermissionsPlayer()}>Salvar Alterações</Button>
          </S.Actions>
        </S.Column>
      </Modal.Content>
    </Modal.Root>
  )
})

export default EditPermissionsModal;