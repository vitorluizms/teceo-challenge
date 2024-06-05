import React, { Dispatch, SetStateAction, useState } from 'react'
import { IAnimeData } from '../Types/animesType'

export interface IAnimeContextState {
  animeList: IAnimeData[]
  setAnimeList: Dispatch<SetStateAction<IAnimeData[]>>
  animesToRemove: IAnimeData[]
  setAnimesToRemove: Dispatch<SetStateAction<IAnimeData[]>>
  isModalOpen: boolean
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  inputSearch: string
  setInputSearch: Dispatch<SetStateAction<string>>
  baseAnimesList: IAnimeData[]
  setBaseAnimesList: Dispatch<SetStateAction<IAnimeData[]>>
}

export const AnimeContext = React.createContext<IAnimeContextState>({
  animeList: [],
  setAnimeList: () => {},
  animesToRemove: [],
  setAnimesToRemove: () => {},
  isModalOpen: false,
  setIsModalOpen: () => {},
  inputSearch: '',
  setInputSearch: () => {},
  baseAnimesList: [],
  setBaseAnimesList: () => {},
})

const generateAnimes = (): IAnimeData[] => {
  const animesArray: IAnimeData[] = []
  const animesNames: Omit<IAnimeData, 'id'>[] = [
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
  const [baseAnimesList, setBaseAnimesList] = useState<IAnimeData[]>(generateAnimes())
  const [animeList, setAnimeList] = useState<IAnimeData[]>(baseAnimesList)
  const [animesToRemove, setAnimesToRemove] = useState<IAnimeData[]>([])
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [inputSearch, setInputSearch] = useState('')

  return (
    <AnimeContext.Provider
      value={{
        animeList,
        setAnimeList,
        animesToRemove,
        setAnimesToRemove,
        isModalOpen,
        setIsModalOpen,
        inputSearch,
        setInputSearch,
        baseAnimesList,
        setBaseAnimesList,
      }}
    >
      {children}
    </AnimeContext.Provider>
  )
}
