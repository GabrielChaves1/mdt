import Modal from "@/components/Modal";
import { ModalRootHandles } from "@/components/Modal/ModalRoot";
import { forwardRef, useState } from "react";
import * as S from './styles';
import { Banknote, Clock, Forward } from "lucide-react";
import { useTheme } from "styled-components";
import IPrision from "@/types/Prision";
import { useNavigate } from "react-router-dom";
import IPenalCode from "@/types/PenalCode";
import fetchNui from "@/utils/fetchNui";
import IOfficer from "@/types/Prision";

const ViewDetailsModal = forwardRef<ModalRootHandles>((_, ref) => {
  const navigate = useNavigate();
  const { colors } = useTheme();

  const [ prisionInfo, setPrisionInfo ] = useState<IPrision>({} as IPrision);

  const [ crimesCometidos, setCrimesCometidos ] = useState<IPenalCode[]>([]);

  async function onOpen(data: { prision: IPrision }) {
    data.prision.codigos_penais = JSON.parse(data?.prision.codigos_penais.toString()) as number[]
    data.prision.oficiais = JSON.parse(data?.prision.oficiais.toString()) as IOfficer[]

    setPrisionInfo(data?.prision)

    const crimes = await fetchNui<IPenalCode[]>("getCrimesFromIds", data?.prision?.codigos_penais)
    setCrimesCometidos(crimes)
  }

  const handleViewDetailsOfficer = (id: number) => {
    navigate(`/user/${id}`);
  }

  return (
    <Modal.Root onOpen={onOpen} ref={ref}>
      <Modal.Header title="Documentos da Prisão" subtitle="Você está visualizando os dados contidos na prisão" />
      <Modal.Content>
        <S.UserBox>
          <S.ImageBox>
            <S.Image src={prisionInfo?.mugshot}/>
          </S.ImageBox>
          <S.PrisionData>
            <S.Username>{prisionInfo?.nome} #{prisionInfo?.user_id}</S.Username>
            <S.ArrestedBy>
              <p>Preso por:</p>
              <S.Policers>
                {
                  prisionInfo?.oficiais ? (
                    prisionInfo?.oficiais?.map((x) => (
                      <S.Policer onClick={() => { handleViewDetailsOfficer(x?.id) }}>
                      {x?.label}
                      <Forward size={'1.4rem'}/>
                    </S.Policer>
                    ))
                  ): <br/>
                }
              </S.Policers>
            </S.ArrestedBy>
            <S.Reason>
              <b>Motivo da prisão:</b> {prisionInfo?.descricao}
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
              {
                crimesCometidos?.length > 0 ? (
                  crimesCometidos.map((x) => (
                    <S.Crime>
                      <p>{x?.nome_codigo}</p>
                      <S.CrimeBadges>
                        <S.CrimeBadge>
                          <Clock size={'1.4rem'} color={colors.icon} />
                          {x?.tempo} meses
                        </S.CrimeBadge>

                        <S.CrimeBadge>
                          <Banknote size={'1.4rem'} color={colors.icon} />
                          R$ {x?.multa}
                        </S.CrimeBadge>
                      </S.CrimeBadges>
                    </S.Crime>
                  ))
                ): <></>
              }
              
            </S.Scroll>

            <S.CrimesCounterBox>
              <p>Soma Total:</p>
              <S.CrimeCounter>
                <Clock size={'1.4rem'} color={colors.icon} />
                <p>{prisionInfo?.tempo} meses</p>
              </S.CrimeCounter>
              <S.CrimeCounter>
                <Banknote size={'1.6rem'} color={colors.icon} />
                <p>R$ {prisionInfo?.valor_multa}</p>
              </S.CrimeCounter>
            </S.CrimesCounterBox>
          </S.CrimesList>
        </S.CrimesListBox>
    </Modal.Root>
  )
});

export default ViewDetailsModal;