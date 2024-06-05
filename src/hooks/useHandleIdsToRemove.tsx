import { useContext } from 'react'
import { AnimeContext } from '../Context/animeListContext'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { IAnimeData } from '../Types/animesType'

const useManageAnimeIdsToRemove = () => {
  const { animesToRemove, setAnimesToRemove, animeList } = useContext(AnimeContext)

  const handleToggleAnimeToRemove = (anime: IAnimeData, event: CheckboxChangeEvent) => {
    if (event.target.checked) {
      setAnimesToRemove(prev => [...prev, anime])
      return
    }
    setAnimesToRemove(prev => prev.filter(item => item.id !== anime.id))
  }

  const handleToggleAllAnimes = (event: CheckboxChangeEvent) => {
    if (event.target.checked) {
      setAnimesToRemove([...animeList])
      return
    }
    setAnimesToRemove([])
  }

  return { animesToRemove, handleToggleAnimeToRemove, handleToggleAllAnimes }
}

export default useManageAnimeIdsToRemove
