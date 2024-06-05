import { AnimeData } from '../../../Types/animesType'

function ItemComponent({ index, style, animesData }: { index: number; style: any; animesData: AnimeData[] }) {
  const { name, episodes, genre, status } = animesData[index]
  return (
    <div style={{ ...style }} className="flex w-full">
      <div className="w-2/5 p-3 text-left text-p">{name}</div>
      <div className="w-1/5 p-3 text-left text-p">{genre}</div>
      <div className="w-1/5 p-3 text-left text-p">{episodes}</div>
      <div className="w-1/5 p-3 text-left text-p">{status}</div>
    </div>
  )
}

export default ItemComponent
