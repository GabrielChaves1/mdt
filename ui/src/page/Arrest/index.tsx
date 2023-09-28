import Banner from '@/components/Banner';
import * as S from './styles';
import Table from '@/components/Table';
import { Eye } from 'lucide-react';
import Action from '@/components/Action';
import Pagination from '@/components/Pagination';
import usePaginate from '@/hooks/usePaginate';
import ViewDetailModal from './components/ViewDetailModal';
import { useRef } from 'react';
import { ModalRootHandles } from '@/components/Modal/ModalRoot';
import { Outlet } from 'react-router-dom';
import Animator from '@/components/Animator';

export default function Arrest() {
  return (
    <S.Wrapper>
      <Outlet />
    </S.Wrapper>
  )
}