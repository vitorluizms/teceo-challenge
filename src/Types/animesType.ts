export interface AnimeData {
  id: number
  name: string
  episodes: number
  genre: string
  status: 'Watching' | 'Finished' | 'QUEUE'
}
