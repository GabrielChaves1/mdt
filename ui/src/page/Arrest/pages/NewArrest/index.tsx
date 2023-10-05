import Banner from "@/components/Banner";
import Button from "@/components/Button";
import { ArrowLeftToLine, Banknote, Clock, Plus, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import * as S from "./styles";
import Input from "@/components/Input";
import { TextField } from "@/components/TextField";
import { Textarea } from "@/components/Textarea";
import Switch from "@/components/Switch";
import Card from "@/components/Card";
import Checkbox from "@/components/Checkbox";
import Animator from "@/components/Animator";
import SelectorField from "@/components/SelectorField";
import { MouseEvent, useRef, useState } from "react";
import fetchNui from "@/utils/fetchNui";
import Modal from "@/components/Modal";
import { ModalRootHandles } from "@/components/Modal/ModalRoot";
import ArrestIcon from '@/assets/arrest.webp';

const IMAGE_SLOTS = 3;

export default function NewArrest() {
  const { colors } = useTheme();
  const imagePreviewModalRef = useRef<ModalRootHandles>(null);

  const [violators, setViolators] = useState<any[]>([]);
  const [officers, setOfficers] = useState<any[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [imageInPreview, setImageInPreview] = useState<string>();

  const emptyImageSlots = IMAGE_SLOTS - images.length;

  async function handleCamShoot() {
    const img = await fetchNui<string>("phoneCamShoot");
    setImages((prevState) => [...prevState, img]);
  }

  function handlePreviewImage(event: MouseEvent<HTMLDivElement>, image: string) {
    event.stopPropagation();
    setImageInPreview(image);
    imagePreviewModalRef.current?.openModal();
  }

  function handleDeleteImage(image: string) {
    setImages((prevState) => prevState.filter(el => el !== image));
  }

  return (
    <Animator>
      <Modal.Root ref={imagePreviewModalRef}>
        <Modal.Header title="Preview da Imagem" />
        <Modal.Content>
          <S.ImagePreview src={imageInPreview} />
        </Modal.Content>
      </Modal.Root>

      <S.Container>
        <S.Return>
          <Link to="/arrest">
            <Button variant="secondary">
              <ArrowLeftToLine size={'1.6rem'} color={colors.icon} />
              Voltar
            </Button>
          </Link>
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
                  onQuery={() => fetchNui("getNearestPlayers")}
                  onUpdate={(list: any[]) => setOfficers(list)}
                  placeholder="ID" />
              </Input.Content>
            </Input.Root>

            <Input.Root>
              <Input.Label>Descrição</Input.Label>
              <Input.Content>
                <Textarea style={{ height: '21.75rem' }} placeholder="Digite aqui..." />
              </Input.Content>
            </Input.Root>
          </S.LeftContent>
          <S.RightContent>
            <S.ExtenuatoryArea>
              <S.ExtenuatoryTitle>Atenuantes</S.ExtenuatoryTitle>
              <S.ExtenuatoryList>
                <S.Extenuatory>
                  <p>Réu Primário (-50%)</p>
                  <Switch />
                </S.Extenuatory>
                <S.Extenuatory>
                  <p>Presença de Advogado (-20%)</p>
                  <Switch />
                </S.Extenuatory>
                <S.Extenuatory>
                  <p>Colaboração</p>
                  <Switch />
                </S.Extenuatory>
                <S.Extenuatory>
                  <p>Réu Confesso</p>
                  <Switch />
                </S.Extenuatory>
              </S.ExtenuatoryList>
            </S.ExtenuatoryArea>
            <Card.Root>
              <Card.Header>
                <Card.Column>
                  <Card.Title>Selecionar Crimes</Card.Title>
                  <Card.Subtitle>Lista de artigos criminais</Card.Subtitle>
                </Card.Column>
                <TextField placeholder="Pesquisar crime" icon={Search} style={{ width: '10rem' }} />
              </Card.Header>
              <Card.Separator />
              <Card.Content>
                <S.CrimeList>
                  <S.Crime>
                    <S.CrimeNameBox>
                      <Checkbox />
                      <p title="ART 150 - Tentativa de Homicídio Testando Aviso Lembrete">ART 150 - Tentativa de Homicídio Testando Aviso Lembrete</p>
                    </S.CrimeNameBox>
                    <S.CrimeSpecsBox>
                      <S.CrimeSpec>
                        <Clock color={colors.icon} size={'1.4rem'} />
                        15 meses
                      </S.CrimeSpec>
                      <S.CrimeSpec>
                        <Banknote color={colors.icon} size={'1.6rem'} />
                        R$ 0
                      </S.CrimeSpec>
                    </S.CrimeSpecsBox>
                  </S.Crime>
                </S.CrimeList>
              </Card.Content>
            </Card.Root>
          </S.RightContent>
        </S.Wrapper>
      </S.Container>
    </Animator>
  )
}