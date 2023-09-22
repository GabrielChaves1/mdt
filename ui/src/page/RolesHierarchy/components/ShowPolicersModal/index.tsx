import Modal from '@/components/Modal';
import { forwardRef, useState } from 'react';
import { ModalRootHandles } from '@/components/Modal/ModalRoot';
import * as S from './styles';
import Action from '@/components/Action';
import { Eye } from 'lucide-react';
import Avatar from '@/components/Avatar';

const ShowPolicersModal = forwardRef<ModalRootHandles>((_, ref) => {
  const [ role, setRole ] = useState<string>("");
  
  function onOpen(data: { role: string }) {
    setRole(data.role);
  }

  return (
    <Modal.Root onOpen={onOpen} ref={ref}>
      <Modal.Header title={`Policiais com o cargo - ${role}`} subtitle='Aqui você poderá visualizar todos oficiais que possuem o cargo selecionado' />
      <Modal.Content>
        <S.List>
          <S.User>
            <S.Header>
              <Avatar />
              <S.TextArea>
                <p>Gabriel Droyen</p>
                <span>{role}</span>
              </S.TextArea>
            </S.Header>
            <Action icon={Eye} label='Ver Perfil'/>
          </S.User>
        </S.List>
      </Modal.Content>
    </Modal.Root>
  )
})

export default ShowPolicersModal;