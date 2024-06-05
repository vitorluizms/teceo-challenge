import { Checkbox } from 'antd'
import { IAnimeData } from '../../../Types/animesType'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { useContext } from 'react'
import { AnimeContext } from '../../../Context/animeListContext'
import useManageAnimeIdsToRemove from '../../../hooks/useHandleIdsToRemove'

function ItemComponent({ index, style, animesData }: { index: number; style: any; animesData: IAnimeData[] }) {
  const { id, name, episodes, genre, status } = animesData[index]
  const { animesToRemove } = useContext(AnimeContext)
  const { handleToggleAnimeToRemove } = useManageAnimeIdsToRemove()

  const statusTranslated = {
    Watching: 'Assistindo',
    QUEUE: 'Na lista',
    Finished: 'Assistido',
  }

  return (
    <div style={{ ...style }} className="flex w-full">
      <div className="w-2/5 p-3 text-left text-p">
        <Checkbox
          checked={animesToRemove.some((anime: IAnimeData) => anime.id === id)}
          onChange={(e: CheckboxChangeEvent) => {
            handleToggleAnimeToRemove(animesData[index], e)
          }}
          className="mr-2"
        />
        {name}
      </div>
      <div className="w-1/5 p-3 text-left text-p">{genre}</div>
      <div className="w-1/5 p-3 text-left text-p">{episodes}</div>
      <div className="w-1/5 p-3 text-left text-p">{statusTranslated[status]}</div>
    </div>
  )
}

export default ItemComponent
