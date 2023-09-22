export default interface IPrision {
  prisoner: {
    id: number,
    name: string
  },
  time: number,
  fine: number,
  arrestedIn: number
}