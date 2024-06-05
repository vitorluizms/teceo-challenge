import React, { useState } from 'react'
import { AnimeData } from '../Types/animesType'

export interface IAnimeContextState {
  animeList: AnimeData[]
  setAnimeList: (newAnimeList: AnimeData[]) => void
}

export const AnimeContext = React.createContext<IAnimeContextState>({
  animeList: [],
  setAnimeList: () => {},
})

const generateAnimes = (): AnimeData[] => {
  const animesArray: AnimeData[] = []
  const animesNames: Omit<AnimeData, 'id'>[] = [
    { name: 'Shingeki no Kyojin', episodes: 87, genre: 'Ação, Fantasia', status: 'Finished' },
    { name: 'One Piece', episodes: 1107, genre: 'Ação, Aventura, Fantasia', status: 'Watching' },
    { name: 'Haikyuu', episodes: 86, genre: 'Colegial, Esportes', status: 'Finished' },
    { name: 'Fullmetal Alchemist', episodes: 64, genre: 'Ação, Aventura, Drama, Fantasia', status: 'Finished' },
    { name: 'Shigatsu Wa Kimi no Uso', episodes: 22, genre: 'Drama, Romance', status: 'Finished' },
    { name: 'Monster', episodes: 74, genre: 'Thriller Psicológico, Suspense, Mistério', status: 'Finished' },
    { name: 'Ousama Ranking', episodes: 23, genre: 'Aventura, Fantasia', status: 'Finished' },
  ]

  for (let i = 0; i < 200; i++) {
    const animePosition = Math.floor(Math.random() * 7)

    animesArray.push({ id: i, ...animesNames[animePosition] })
  }

  return animesArray
}

export default function AnimeProvider({ children }: { children?: React.ReactNode }) {
  const [animeList, setAnimeList] = useState<AnimeData[]>(generateAnimes())

  return <AnimeContext.Provider value={{ animeList, setAnimeList }}>{children}</AnimeContext.Provider>
}
