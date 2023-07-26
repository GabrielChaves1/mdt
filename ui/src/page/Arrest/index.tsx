import Banner from '@/components/Banner';
import * as S from './styles';

import ViolatorForm from './components/ViolatorForm';
import PolicersForm from './components/PolicersForm';
import PrisonDetails from './components/PrisonDetails';
import CrimeSelector from './components/CrimeSelector';

export default function Arrest() {
  return (
    <S.Wrapper>
      <Banner.Root>
        <Banner.Header>
          <Banner.Title>Registrar prisão</Banner.Title>
        </Banner.Header>
        <Banner.Action>Confirmar</Banner.Action>
      </Banner.Root>

      <S.Grid>
        <ViolatorForm />
        <PolicersForm />
        <PrisonDetails />
        <CrimeSelector />
      </S.Grid>
    </S.Wrapper>
  )
}