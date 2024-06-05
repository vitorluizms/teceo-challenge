import { Badge, Checkbox, Popover } from 'antd'
import { IAnimeData } from '../../../Types/animesType'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { useContext, useState } from 'react'
import { AnimeContext } from '../../../Context/animeListContext'
import useManageAnimeIdsToRemove from '../../../hooks/useHandleIdsToRemove'
import { twMerge } from 'tailwind-merge'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import PopoverOptionsContent from '../../Common/Popover'

function AnimePreview({ index, style, animesData }: { index: number; style: any; animesData: IAnimeData[] }) {
  const { id, name, episodes, genre, status } = animesData[index]
  const { animesToRemove } = useContext(AnimeContext)
  const { handleToggleAnimeToRemove } = useManageAnimeIdsToRemove()
  const [popoverOptionsState, setPopoverOptionsState] = useState<'menu' | 'status'>('menu')

  const statusTranslated = {
    Watching: 'Assistindo',
    QUEUE: 'Na lista',
    Finished: 'Assistido',
  }

  const badgeStatusColors = {
    Watching: '#4CAF50',
    QUEUE: '#2196F3',
    Finished: '#9C27B0',
  }

  return (
    <div style={{ ...style }} className={twMerge('flex w-full', index !== animesData.length - 1 && 'border-b')}>
      <div className="w-2/5 p-3 text-left text-p flex items-center">
        <Checkbox
          checked={animesToRemove.some((anime: IAnimeData) => anime.id === id)}
          onChange={(e: CheckboxChangeEvent) => {
            handleToggleAnimeToRemove(animesData[index], e)
          }}
          className="mr-2"
        />
        {name}
      </div>
      <div className="w-1/5 p-3 text-left text-p flex items-center">{genre}</div>
      <div className="w-1/5 p-3 text-left text-p flex items-center justify-center">{episodes}</div>
      <div className="w-1/5 p-3 text-left text-p flex items-center justify-between">
        <Badge color={badgeStatusColors[status]} text={statusTranslated[status]}></Badge>
        <Popover
          placement="bottomLeft"
          trigger="click"
          title="Opções"
          content={
            <PopoverOptionsContent
              screen={popoverOptionsState}
              setScreen={setPopoverOptionsState}
              status={status}
              index={index}
            />
          }
        >
          <button type="button" className="bg-none cursor-pointer">
            <EllipsisHorizontalIcon className="w-[16px] " />
          </button>
        </Popover>
      </div>
    </div>
  )
}

export default AnimePreview
