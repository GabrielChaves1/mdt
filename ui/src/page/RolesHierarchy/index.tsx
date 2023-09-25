import Banner from '@/components/Banner';
import * as S from './styles';
import Table from '@/components/Table';
import { useRef } from 'react';
import { ModalRootHandles } from '@/components/Modal/ModalRoot';
import EditPermissionsModal from './components/EditPermissionsModal';
import { FileEdit, Users } from 'lucide-react';
import ShowPolicersModal from './components/ShowPolicersModal';
import Action from '@/components/Action';
import CrownIcon from '@/assets/crown.webp';

interface Role {
  id: number,
  name: string,
  index: string
}

export default function RolesHierarchy() {
  const editPermissionsModalRef = useRef<ModalRootHandles>(null);
  const showPolicersModalRef = useRef<ModalRootHandles>(null);

  const handleEditPermissions = (role: string) => {
    editPermissionsModalRef.current?.openModal({ role });
  }

  const handleShowPolicers = (role: string) => {
    showPolicersModalRef.current?.openModal({ role });
  }

  return (
    <S.Wrapper>
      <ShowPolicersModal ref={showPolicersModalRef} />
      <EditPermissionsModal ref={editPermissionsModalRef} />

      <Banner.Root icon={CrownIcon}>
        <Banner.Header>
          <Banner.Title>Hierarquia de Cargos</Banner.Title>
        </Banner.Header>
      </Banner.Root>

      <Table.Root headColumns={["ID", "Cargo", "Ações"]}>
        <Table.Row>
          <Table.Item>#1</Table.Item>
          <Table.Item>Comandante Geral</Table.Item>
          <Table.Item>
            <Action icon={FileEdit} size='sm' label='Editar Permissões' onClick={() => handleEditPermissions("Comandante Geral")} />
            <Action icon={Users} size='sm' label='Visualizar Oficiais' onClick={() => handleShowPolicers("Comandante Geral")} />
          </Table.Item>
        </Table.Row>
      </Table.Root>
    </S.Wrapper>
  )
}