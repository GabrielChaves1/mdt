import Modal from "@/components/Modal";
import { ModalRootHandles } from "@/components/Modal/ModalRoot";
import { forwardRef } from "react";
import * as S from './styles';
import { Banknote, Clock, Forward } from "lucide-react";
import { useTheme } from "styled-components";

const ViewDetailModal = forwardRef<ModalRootHandles>((_, ref) => {
  const { colors } = useTheme();

  return (
    <Modal.Root ref={ref}>
      <Modal.Header title="Documentos da Prisão" subtitle="Você está visualizando os dados contidos na prisão" />
      <Modal.Content>
        <S.UserBox>
          <S.ImageBox>
            <S.Image src="https://cdn.ome.lt/XmNgZkW2CggS6RGXiEz55spbmQs=/970x360/smart/uploads/conteudo/fotos/gta-franklin-selfie-topo.jpg"/>
          </S.ImageBox>
          <S.PrisionData>
            <S.Username>John Doe #5123</S.Username>
            <S.ArrestedBy>
              <p>Preso por:</p>
              <S.Policers>
                <S.Policer>
                  Droyen
                  <Forward size={'1.4rem'}/>
                </S.Policer>
                <S.Policer>
                  Droyen
                  <Forward size={'1.4rem'}/>
                </S.Policer>
                <S.Policer>
                  Droyen
                  <Forward size={'1.4rem'}/>
                </S.Policer>
                <S.Policer>
                  Droyen
                  <Forward size={'1.4rem'}/>
                </S.Policer>
              </S.Policers>
            </S.ArrestedBy>
            <S.Reason>
              <b>Motivo da prisão:</b> Tentativa de fuga e ofensas aos oficiais da guarnição Roubo a caixa eletrônico e tentativa de homicidio, estava portando 2x ak-47, 1x lockpick, 250x munições de ak-47 e 1 pistola mk2
            </S.Reason>
          </S.PrisionData>
        </S.UserBox>
      </Modal.Content>
        <S.CrimesListBox>
          <S.CrimesHeader>
            <p>Crimes Cometidos</p>
          </S.CrimesHeader>
          <S.CrimesList>
            <S.Scroll>
              <S.Crime>
                <p>Tentativa de Homicidio</p>
                <S.CrimeBadges>
                  <S.CrimeBadge>
                    <Clock size={'1.4rem'} color={colors.icon} />
                    15 meses
                  </S.CrimeBadge>
                  <S.CrimeBadge>
                    <Banknote size={'1.4rem'} color={colors.icon} />
                    R$ 250.000
                  </S.CrimeBadge>
                </S.CrimeBadges>
              </S.Crime>
            </S.Scroll>
            <S.CrimesCounterBox>
              <p>Soma Total:</p>
              <S.CrimeCounter>
                <Clock size={'1.4rem'} color={colors.icon} />
                <p>50 meses (-50%)</p>
              </S.CrimeCounter>
              <S.CrimeCounter>
                <Banknote size={'1.6rem'} color={colors.icon} />
                <p>R$ 150.000,00</p>
              </S.CrimeCounter>
            </S.CrimesCounterBox>
          </S.CrimesList>
        </S.CrimesListBox>
    </Modal.Root>
  )
});

export default ViewDetailModal;