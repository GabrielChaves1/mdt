import Banner from '@/components/Banner';
import * as S from './styles';
import Table from '@/components/Table';
import Action from '@/components/Action';
import { FileEdit, Search } from 'lucide-react';
import Modal from '@/components/Modal';
import { useRef } from 'react';
import { ModalRootHandles } from '@/components/Modal/ModalRoot';
import EditPermissionsModal from './components/EditPermissionsModal';

export default function RolesHierarchy() {
  const editPermissionsModalRef = useRef<ModalRootHandles>(null);

  const handleEditPermissions = () => {
    editPermissionsModalRef.current?.openModal();
  }
  
  return (
    <S.Wrapper>
      <EditPermissionsModal ref={editPermissionsModalRef}/>
    
      <Banner.Root>
        <Banner.Header>
          <Banner.Title>Hierarquia de Cargos</Banner.Title>
        </Banner.Header>
      </Banner.Root>
    
      <Table.Root headColumns={["ID", "Cargo", "Ações"]}>
        <Table.Row>
          <Table.Item>#1</Table.Item>
          <Table.Item>Comandante Geral</Table.Item>
          <Table.Item>
            <Action onClick={handleEditPermissions} size='sm' icon={FileEdit} label='Editar Permissões' />
          </Table.Item>
        </Table.Row>
      </Table.Root>
    </S.Wrapper>
  )
}