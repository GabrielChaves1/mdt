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
import { useQuery } from '@tanstack/react-query';
import fetchNui from '@/utils/fetchNui';
import Loading from '@/components/Loading';
import GroupHierarchy from '@/types/GroupHierarchy';
import usePaginate from '@/hooks/usePaginate';
import Pagination from '@/components/Pagination';

export default function RolesHierarchy() {
  const { data, isLoading } = useQuery<GroupHierarchy[]>(['getHierarchy'], () => fetchNui("getHierarchy"), {
    initialData: [
      {
        group: "PMESPRecruta",
        display: "Recruta",
        position: 1,
        org: "PMESP"
      },
    ],
  })
  const { amountOfPages, currentPage, items, totalOfItems, viewedItems, paginate } = usePaginate<GroupHierarchy>(13, 1, data);
  
  const sortedPositionGroup = data?.sort((a, b) => a.position - b.position);

  const editPermissionsModalRef = useRef<ModalRootHandles>(null);
  const showPolicersModalRef = useRef<ModalRootHandles>(null);

  const handleEditPermissions = (group: GroupHierarchy) => {
    editPermissionsModalRef.current?.openModal({ group });
  }

  const handleShowPolicers = (group: GroupHierarchy) => {
    showPolicersModalRef.current?.openModal({ group });
  }

  return (
    <S.Wrapper>
      <ShowPolicersModal ref={showPolicersModalRef} />
      <EditPermissionsModal onClose={() => editPermissionsModalRef.current?.closeModal()} ref={editPermissionsModalRef} />

      <Banner.Root icon={CrownIcon}>
        <Banner.Header>
          <Banner.Title>Hierarquia de Cargos</Banner.Title>
        </Banner.Header>
      </Banner.Root>

      <Table.Root headColumns={["ID", "Cargo", "Ações"]}>
        {isLoading ? (
            <Loading />
          ) : (
            <>
              {sortedPositionGroup?.map((item, i) => (
                <Table.Row key={i}>
                  <Table.Item>#{item?.position}</Table.Item>
                  <Table.Item>{item?.display}</Table.Item>
                  <Table.Item>
                    <Action icon={FileEdit} size='sm' label='Editar Permissões' onClick={() => handleEditPermissions(item)} />
                    <Action icon={Users} size='sm' label='Visualizar Oficiais' onClick={() => handleShowPolicers(item)} />
                  </Table.Item>
                </Table.Row>
              ))}
            </>
          )}
      </Table.Root>
      <Pagination
          amountOfPages={amountOfPages}
          currentPage={currentPage}
          itemsBeingViewed={viewedItems}
          totalOfItems={totalOfItems}
          onPaginate={(page: number) => paginate(page)} />
    </S.Wrapper>
  )
}