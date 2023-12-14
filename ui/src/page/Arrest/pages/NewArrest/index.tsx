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
import formatNumber from "@/utils/formatNumber";
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
  const [description, setDescription] = useState('');

  const setOffencesValue = data.filter((item) => item.nome_codigo.toLowerCase().includes(search.toLowerCase()))
  const [offences, setOffences] = useState<any[]>(setOffencesValue);
  const [selectedOffences, setSelectedOffences] = useState<any[]>([]);

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

  function handleManageOffences(checked: boolean, offence: any) {
    const indexPerm = offences.indexOf(offence);
    let _offences = [...offences];

    _offences[indexPerm].active = checked;
    setOffences(_offences);

    if(checked) {
      setSelectedOffences((prevState) => [...prevState, offence]);
      return;
    }

    const _selectedOffences = _offences.filter(x => x.active);
    setSelectedOffences(_selectedOffences);
  }

  function handleSubmit() {
    fetchNui("jailPlayer", { 
      violators: violators,
      officers: officers, 
      images: images,
      offences: selectedOffences,
      tempo: selectedOffences.reduce((sum, offence) => { return sum + offence?.tempo }, 0),
      multa: selectedOffences.reduce((sum, offence) => { return sum + offence?.multa }, 0),
      fianca: selectedOffences.reduce((sum, offence) => { return sum + offence?.fianca }, 0),
      desc: description
    });

    navigate(-1)
  }

  const handleShowInventory = (id: number) => {
    // if(id)
      itemSelectorModalRef.current?.openModal({ user_id: id })
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
                  onQuery={() => fetchNui("getNearestPlayers")}
                  onUpdate={(list: any[]) => setOfficers(list)}
                  placeholder="ID" />
              </Input.Content>
            </Input.Root>

            <Input.Root>
              <Input.Label>Descrição</Input.Label>
              <Input.Content>
                <Textarea 
                  style={{ height: '22.75rem' }} 
                  placeholder="Digite aqui..." 
                  onChange={({ target }) => setDescription(target.value)} 
                  value={description}
                />
              </Input.Content>
            </Input.Root>
          </S.LeftContent>
          <S.RightContent>
            <S.ActionsList>
              <Button position="center" fill variant="secondary" size="md">Adicionar Atenuantes</Button>
              <Button position="center" fill variant="secondary" size="md" onClick={() => handleShowInventory(violators[0]?.id)}>Apreender Itens</Button>
              <Button position="center" fill variant="primary" size="md" onClick={handleSubmit}>Prender</Button>
            </S.ActionsList>
            <Card.Root>
              <Card.Header>
                <Card.Column>
                  <Card.Title>Selecionar Crimes</Card.Title>
                  <Card.Subtitle>Lista de artigos criminais</Card.Subtitle>
                </Card.Column>
                <TextField
                  placeholder="Pesquisar crime" 
                  onChange={({ target }) => { setSearch(target.value); setOffences(data.filter((item) => item.nome_codigo.toLowerCase().includes(search.toLowerCase())))} } 
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
                      {offences.map((item, i) => (
                        <S.Crime key={i}>
                          <S.CrimeNameBox>
                            <Checkbox 
                              checked={item?.active}
                              onCheckedChange={(checked: any) => handleManageOffences(checked, item)}
                            />
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
                              R$ {formatNumber(item?.multa)}
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
                    <p>{ selectedOffences.reduce((sum, value) => { return sum + value?.tempo }, 0) } meses</p>
                  </S.CrimeCounter>
                  <S.CrimeCounter>
                    <Banknote size={'1.6rem'} color={colors.icon} />
                    <p>R$ {formatNumber(selectedOffences.reduce((sum, value) => { return sum + value?.multa }, 0))}</p>
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