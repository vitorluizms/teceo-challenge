import { useContext } from 'react'
import ItemComponent from './ItemComponent'
import { AnimeContext, AnimeContextState } from '../../../Context/animeListContext'
import { FixedSizeList as List } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import { useWindowSize } from 'react-use'

function Table() {
  const { animeList, setAnimeList } = useContext<AnimeContextState>(AnimeContext)
  const itemCount = animeList.length
  const { height, width } = useWindowSize()
  const columnWidths = [2 / 5, 1 / 5, 1 / 5, 1 / 5]

  const Cell = ({ index, style }: { index: number; style: any }) => {
    return <ItemComponent animesData={animeList} index={index} style={style} />
  }

  return (
    <div className="w-full my-5 border-separate border-spacing-0 border rounded-lg overflow-hidden">
      <div className="bg-gray-FAFAFA rounded-t-lg">
        <div className="flex">
          <div className="border-b p-3 text-left text-h3 flex" style={{ width: `${columnWidths[0] * 100}%` }}>
            <input type="checkbox" className="mr-3" />
            <span className="block w-full border-r-2">Nome</span>
          </div>
          <div className="border-b p-3 text-left text-h3 flex" style={{ width: `${columnWidths[1] * 100}%` }}>
            <span className="block w-full border-r-2">Gênero</span>
          </div>
          <div className="border-b p-3 text-left text-h3 flex" style={{ width: `${columnWidths[2] * 100}%` }}>
            <span className="block w-full border-r-2">Episódios</span>
          </div>
          <div className="border-b p-3 text-left text-h3 flex" style={{ width: `${columnWidths[3] * 100}%` }}>
            <span className="">Status</span>
          </div>
        </div>
      </div>
      <div>
        <List width={'100%'} height={height} itemCount={itemCount} itemSize={35} className="overflow-auto">
          {Cell}
        </List>
      </div>
    </div>
  )
}

export default Table
