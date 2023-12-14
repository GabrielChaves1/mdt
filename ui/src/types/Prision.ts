export default interface IOfficer {
  id: number,
  label: string
}

export default interface IPrision {
  id: number,
  user_id: number,
  nome: string
  tempo: number,
  valor_multa: number,
  data: number,
  descricao: string,
  oficiais: IOfficer[],
  mugshot: string,
  imgs: string[],
  codigos_penais: number[]
}