import ITimeline from "./Timeline"

export default interface IProfile {
  user_id: number
  officer: string
  img: string
  cargo: string
  nextCargo: string
  xp: number
  xpToUp: number
  cursos: any[]
  timeline: ITimeline[]
}