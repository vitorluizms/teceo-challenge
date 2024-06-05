import { useContext } from 'react'
import { AnimeContext } from '../Context/animeListContext'
import { IAnimeData } from '../Types/animesType'

const useRemoveAnime = () => {
  const { setAnimeList, setAnimesToRemove } = useContext(AnimeContext)

  const removeAnimesByIds = (animesToRemove: IAnimeData[]) => {
    const idsToRemoveSet = new Set(animesToRemove.map(anime => anime.id))

    setAnimeList((prevList: IAnimeData[]) => prevList.filter(anime => !idsToRemoveSet.has(anime.id)))
    setAnimesToRemove([])
  }

  return { removeAnimesByIds }
}

export default useRemoveAnime
