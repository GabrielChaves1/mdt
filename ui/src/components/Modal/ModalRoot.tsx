import { ForwardRefRenderFunction, ReactNode, forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import * as S from './styles';
import { XCircle } from 'lucide-react';
import { useTheme } from 'styled-components';

export interface ModalRootHandles {
  openModal: (data: any) => void
  closeModal: () => void
}

interface ModalRootProps {
  onOpen?: (data: any) => void
  children: ReactNode
}

const ModalRoot: ForwardRefRenderFunction<ModalRootHandles, ModalRootProps> = ({ children, onOpen }, ref) => {
  const { colors } = useTheme()
  const [visible, setVisible] = useState<boolean>(false);
  
  const openModal = useCallback((props: any) => {
    if(onOpen) onOpen({...props});
    setVisible(true);
  },[])
  
  const closeModal = useCallback(() => {
    setVisible(false);
  },[])
  
  useImperativeHandle(ref, () => {
    return {
      openModal,
      closeModal
    }
  })

  if(!visible) return null;

  return (
    <S.Root
      transition={{ duration: .15 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <S.CloseTrigger onClick={closeModal}></S.CloseTrigger>
      <S.Wrapper>
        <S.CloseButton onClick={closeModal}>
          <XCircle size={'2rem'} color={colors.icon} />
        </S.CloseButton>
        {children}
      </S.Wrapper>
    </S.Root>
  )
}

export default forwardRef(ModalRoot);