import Banner from "@/components/Banner";
import Button from "@/components/Button";
import { ArrowLeftToLine, Banknote, Clock, Eye, Plus, Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import * as S from "./styles";
import Input from "@/components/Input";
import { TextField } from "@/components/TextField";
import { Textarea } from "@/components/Textarea";
import Card from "@/components/Card";
import Checkbox from "@/components/Checkbox";
import Animator from "@/components/Animator";
import SelectorField from "@/components/SelectorField";
import { MouseEvent, useRef, useState } from "react";
import fetchNui from "@/utils/fetchNui";
import Modal from "@/components/Modal";
import { ModalRootHandles } from "@/components/Modal/ModalRoot";
import ArrestIcon from '@/assets/arrest.webp';
import Inventory from "@/components/Inventory";
import { useQuery } from "@tanstack/react-query";
import IPenalCode from "@/types/PenalCode";
import Loading from "@/components/Loading";
import Action from "@/components/Action";

const IMAGE_SLOTS = 3;

export default function NewArrest() {
  const { colors } = useTheme();
  const navigate = useNavigate();

  const imagePreviewModalRef = useRef<ModalRootHandles>(null);
  const itemSelectorModalRef = useRef<ModalRootHandles>(null);

  const { data, isLoading } = useQuery<IPenalCode[]>(['getCodigoPenal'], () => fetchNui("getCodigoPenal"), {
    initialData: [
      {
        id: 1,
        nome_codigo: "teste",
        descricao: "testte",
        tempo: 5,
        multa: 10000
      },

      {
        id: 2,
        nome_codigo: "teste 2",
        descricao: "testte 2",
        tempo: 15,
        multa: 5000
      },
    ],
  })

  const [search, setSearch] = useState('');
  const [violators, setViolators] = useState<any[]>([]);
  const [officers, setOfficers] = useState<any[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [imageInPreview, setImageInPreview] = useState<string>();
  const [detainedItems, setDetainedItems] = useState();

  const filteredCrimes = data.filter((item) => item.nome_codigo.toLowerCase().includes(search.toLowerCase()));

  const emptyImageSlots = IMAGE_SLOTS - images.length;

  async function handleCamShoot() {
    const img = await fetchNui<string>("phoneCamShoot");
    setImages((prev) => ([...prev, img]));
  }

  function handlePreviewImage(event: MouseEvent<HTMLDivElement>, image: string) {
    event.stopPropagation();
    setImageInPreview(image);
    imagePreviewModalRef.current?.openModal();
  }

  function handleDeleteImage(image: string) {
    setImages((prev) => prev.filter(el => el !== image));
  }

  return (
    <Animator>
      <Inventory onUpdateItems={(items) => {}} onClose={() => itemSelectorModalRef.current?.closeModal()} ref={itemSelectorModalRef}/>

      <Modal.Root ref={imagePreviewModalRef}>
        <Modal.Header title="Preview da Imagem" />
        <Modal.Content>
          <S.ImagePreview src={imageInPreview} />
        </Modal.Content>
      </Modal.Root>

      <S.Container>
        <S.Return>
          <Button onClick={() => navigate(-1)} variant="secondary">
            <ArrowLeftToLine size={'1.6rem'} color={colors.icon} />
            Voltar
          </Button>
        </S.Return>

        <Banner.Root icon={ArrestIcon}>
          <Banner.Header>
            <Banner.Title>Aplicar prisão</Banner.Title>
          </Banner.Header>
        </Banner.Root>

        <S.Wrapper>
          <S.LeftContent>
            <Input.Root>
              <Input.Label>Infrator</Input.Label>
              <Input.Content>
                <SelectorField
                  onQuery={() => fetchNui("getNearestPlayers")}
                  onUpdate={(list: any[]) => setViolators(list)}
                  placeholder="ID"
                  type="number" />
              </Input.Content>
            </Input.Root>

            <Input.Root>
              <Input.Label>Imagens do Infrator</Input.Label>
              <Input.Content>
                <S.ImageSelectorBox>
                  {images?.map((srcImg) => (
                    <S.ImageSelector>
                      <S.ImageSelectorDelete onClick={() => handleDeleteImage(srcImg)}>
                        <X size={'1.2rem'} color="#FFF" />
                      </S.ImageSelectorDelete>
                      <S.PreviewTrigger onClick={(event) => handlePreviewImage(event, srcImg)}>
                        <img src={srcImg} />
                      </S.PreviewTrigger>
                    </S.ImageSelector>
                  ))}
                  {[...Array(emptyImageSlots)].map(() => (
                    <S.ImageSelector onClick={handleCamShoot}>
                      <Plus size={'3rem'} color={colors.icon} />
                    </S.ImageSelector>
                  ))}
                </S.ImageSelectorBox>
              </Input.Content>
            </Input.Root>

            <Input.Root>
              <Input.Label>Oficiais envolvidos</Input.Label>
              <Input.Content>
                <SelectorField
                  onQuery={() => fetchNui("getNearestOfficersPlayers")}
                  onUpdate={(list: any[]) => setOfficers(list)}
                  placeholder="ID" />
              </Input.Content>
            </Input.Root>

            <Input.Root>
              <Input.Label>Descrição</Input.Label>
              <Input.Content>
                <Textarea style={{ height: '22.75rem' }} placeholder="Digite aqui..." />
              </Input.Content>
            </Input.Root>
          </S.LeftContent>
          <S.RightContent>
            <S.ActionsList>
              <Button position="center" fill variant="secondary" size="md">Adicionar Atenuantes</Button>
              <Button position="center" fill variant="secondary" size="md" onClick={() => itemSelectorModalRef.current?.openModal()}>Apreender Itens</Button>
              <Button position="center" fill variant="primary" size="md">Prender</Button>
            </S.ActionsList>
            <Card.Root>
              <Card.Header>
                <Card.Column>
                  <Card.Title>Selecionar Crimes</Card.Title>
                  <Card.Subtitle>Lista de artigos criminais</Card.Subtitle>
                </Card.Column>
                <TextField 
                  placeholder="Pesquisar crime" 
                  onChange={({ target }) => setSearch(target.value)} 
                  value={search}
                  icon={Search} 
                  style={{ width: '10rem' }} />
              </Card.Header>
              <Card.Separator />
              <Card.Content>
                <S.CrimeList>
                {isLoading ? (
                    <Loading />
                  ) : (
                    <>
                      {filteredCrimes.map((item, i) => (
                        <S.Crime key={i}>
                          <S.CrimeNameBox>
                            <Checkbox />
                            <p title={item?.nome_codigo}>{item?.nome_codigo}</p>
                          </S.CrimeNameBox>
                          <S.CrimeSpecsBox>
                            <Action label="Ver detalhes" icon={Eye} size="sm" />
                            <S.CrimeSpec>
                              <Clock color={colors.icon} size={'1.4rem'} />
                              {item?.tempo} meses
                            </S.CrimeSpec>
                            <S.CrimeSpec>
                              <Banknote color={colors.icon} size={'1.6rem'} />
                              R$ {item?.multa}
                            </S.CrimeSpec>
                          </S.CrimeSpecsBox>
                        </S.Crime>
                      ))}
                    </>
                  )}
                </S.CrimeList>
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
              </Card.Content>
            </Card.Root>
          </S.RightContent>
        </S.Wrapper>
      </S.Container>
    </Animator>
  )
}