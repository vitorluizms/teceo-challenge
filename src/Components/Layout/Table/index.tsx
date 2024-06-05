import { useContext } from 'react'
import ItemComponent from './ItemComponent'
import { AnimeContext, IAnimeContextState } from '../../../Context/animeListContext'
import { FixedSizeList as List } from 'react-window'
import { useWindowSize } from 'react-use'
import { Checkbox } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import useManageAnimeIdsToRemove from '../../../hooks/useHandleIdsToRemove'
import { IAnimeData } from '../../../Types/animesType'

function Table({ data }: { data?: IAnimeData[] }) {
  const { animeList, animesToRemove } = useContext<IAnimeContextState>(AnimeContext)
  const { handleToggleAllAnimes } = useManageAnimeIdsToRemove()

  const itemCount = animeList.length
  const { width, height } = useWindowSize()
  const itemSize = width < 760 ? 70 : 50
  const columnWidths = [2 / 5, 1 / 5, 1 / 5, 1 / 5]

  const Cell = ({ index, style }: { index: number; style: any }) => {
    return <ItemComponent animesData={data ? data : animeList} index={index} style={style} />
  }

  return (
    <div className="w-full min-w-[650px] my-5 border-separate border-spacing-0 border rounded-lg overflow-hidden">
      <div className="bg-gray-FAFAFA rounded-t-lg">
        <div className="flex">
          <div
            className="border-b p-3 text-left text-h3 flex items-center text-column-text"
            style={{ width: `${columnWidths[0] * 100}%` }}
          >
            <Checkbox
              checked={animeList.length === animesToRemove.length && animeList.length !== 0}
              onChange={(e: CheckboxChangeEvent) => {
                handleToggleAllAnimes(e)
              }}
              className="mr-2"
            />
            <span className="block w-full border-r-2">Nome</span>
          </div>
          <div
            className="border-b p-3 text-left text-h3 flex items-center text-column-text"
            style={{ width: `${columnWidths[1] * 100}%` }}
          >
            <span className="block w-full border-r-2">Gênero</span>
          </div>
          <div
            className="border-b p-3 text-left text-h3 flex items-center text-column-text"
            style={{ width: `${columnWidths[2] * 100}%` }}
          >
            <span className="flex justify-center  w-full border-r-2">Episódios</span>
          </div>
          <div
            className="border-b p-3 text-left text-h3 flex items-center text-column-text"
            style={{ width: `${columnWidths[3] * 100}%` }}
          >
            <span>Status</span>
          </div>
        </div>
      </div>
      <div>
        <List width={'100%'} height={height - 250} itemCount={itemCount} itemSize={itemSize} className="overflow-auto">
          {Cell}
        </List>
      </div>
    </div>
  )
}

export default Table
