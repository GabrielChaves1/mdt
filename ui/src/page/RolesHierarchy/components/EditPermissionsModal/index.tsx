import * as S from './styles';
import { Search } from 'lucide-react';
import Modal from '@/components/Modal';
import { forwardRef } from 'react';
import { ModalRootHandles } from '@/components/Modal/ModalRoot';
import { TextField } from '@/components/TextField';
import Switch from '@/components/Switch';
import Button from '@/components/Button';

const EditPermissionsModal = forwardRef<ModalRootHandles>((props, ref) => {
  return (
    <Modal.Root ref={ref}>
      <Modal.Header title='Editar Permissões' subtitle='Aqui você poderá editar as permissões do cargo selecionado' />
      <Modal.Content>
        <S.Column>
          <TextField placeholder='Pesquisar...' icon={Search} />
          <S.PermissionsList>
            <S.Permission>
              <S.PermissionTitleArea>
                <p>Prender</p>
                <span>Os oficiais com essa permissão poderão prender cidadãos</span>
              </S.PermissionTitleArea>
              <Switch />
            </S.Permission>
            <S.Permission>
              <S.PermissionTitleArea>
                <p>Multar</p>
                <span>Os oficiais com essa permissão poderão multar cidadãos</span>
              </S.PermissionTitleArea>
              <Switch />
            </S.Permission>
            <S.Permission>
              <S.PermissionTitleArea>
                <p>Criar Operações</p>
                <span>Os oficiais com essa permissão poderão criar operações</span>
              </S.PermissionTitleArea>
              <Switch />
            </S.Permission>
            <S.Permission>
              <S.PermissionTitleArea>
                <p>Exonerar Membros</p>
                <span>Os oficiais com essa permissão poderão exonerar oficiais</span>
              </S.PermissionTitleArea>
              <Switch />
            </S.Permission>
            <S.Permission>
              <S.PermissionTitleArea>
                <p>Promover Membros</p>
                <span>Os oficiais com essa permissão poderão promover oficiais</span>
              </S.PermissionTitleArea>
              <Switch />
            </S.Permission>
          </S.PermissionsList>
          <S.Actions>
            <Button>Salvar Alterações</Button>
          </S.Actions>
        </S.Column>
      </Modal.Content>
    </Modal.Root>
  )
})

export default EditPermissionsModal;