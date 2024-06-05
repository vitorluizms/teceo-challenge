export interface IAnimeData {
  id: number
  name: string
  episodes: number
  genre: string
  status: IAnimeStatus
}

export type IAnimeStatus = 'Watching' | 'Finished' | 'QUEUE'
