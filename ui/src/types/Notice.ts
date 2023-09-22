export default interface INotice {
  id: number,
  title: string,
  description: string,
  author: {
    id: number,
    name: string
  },
  createdAt: number
}