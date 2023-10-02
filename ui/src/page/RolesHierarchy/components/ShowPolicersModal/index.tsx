import Modal from '@/components/Modal';
import { forwardRef, useState } from 'react';
import { ModalRootHandles } from '@/components/Modal/ModalRoot';
import * as S from './styles';
import Action from '@/components/Action';
import { Eye } from 'lucide-react';
import Avatar from '@/components/Avatar';
import GroupHierarchy from '@/types/GroupHierarchy';
import fetchNui from '@/utils/fetchNui';
import Loading from '@/components/Loading';

interface Officer {
  user_id: number,
  nome: string
}

const ShowPolicersModal = forwardRef<ModalRootHandles>((_, ref) => {
  const [role, setRole] = useState<GroupHierarchy>({} as GroupHierarchy);
  const [officers, setOfficers] = useState<Officer[]>([]);

  async function onOpen(data: { group: GroupHierarchy }) {
    var _role = data?.group;
    setRole(_role);

    const officers = await fetchNui<Officer[]>("getOfficersGroup", _role?.group)
    if (officers.length <= 0) return;

    setOfficers(officers)
  }

  return (
    <Modal.Root onOpen={onOpen} ref={ref}>
      <Modal.Header title={`Policiais com o cargo - ${role.display}`} subtitle='Aqui você poderá visualizar todos oficiais que possuem o cargo selecionado' />
      <Modal.Content>
        <S.List>
          {officers ? (
            officers.length == 0 ? <h3>Nenhum oficial encontrado para este cargo</h3> : (
              officers?.map((officer) => (
                <S.User>
                  <S.Header>
                    <Avatar />
                    <S.TextArea>
                      <p>{officer.nome}</p>
                      <span>{role.display}</span>
                    </S.TextArea>
                  </S.Header>
                  <Action icon={Eye} label='Ver Perfil' />
                </S.User>
              ))
            )
          ) : (
            <Loading />
          )}
        </S.List>
      </Modal.Content>
    </Modal.Root>
  )
})

export default ShowPolicersModal;