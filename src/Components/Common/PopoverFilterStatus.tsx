import { Button, Select } from 'antd'
import { useContext, useState } from 'react'
import { IAnimeStatus } from '../../Types/animesType'
import { AnimeContext } from '../../Context/animeListContext'

function StatusSelect() {
  const [partialStatus, setPartialStatus] = useState<IAnimeStatus | null | 'All'>(null)
  const { setAnimeList, baseAnimesList } = useContext(AnimeContext)

  const options: { value: string; label: string }[] = [
    {
      value: 'Watching',
      label: 'Assistindo',
    },
    {
      value: 'QUEUE',
      label: 'Na lista',
    },
    {
      value: 'Finished',
      label: 'Assistido',
    },
    {
      value: 'All',
      label: 'Todos',
    },
  ]

  const filterAnimeByStatus = () => {
    if (partialStatus === 'All') {
      setAnimeList(baseAnimesList)
      return
    }

    const filteredArray = baseAnimesList.filter(anime => anime.status === partialStatus)
    setAnimeList(filteredArray)
  }

  return (
    <div className="mt-[30px] px-[20px] flex flex-col items-end gap-[10px]">
      <Select
        options={options}
        style={{ width: '100%' }}
        onChange={value => {
          setPartialStatus(value)
        }}
      />
      <Button
        type="primary"
        size="middle"
        style={{ fontSize: '16px', fontWeight: 400, width: '60px' }}
        disabled={partialStatus === null}
        onClick={filterAnimeByStatus}
      >
        Filtrar
      </Button>
    </div>
  )
}

export default StatusSelect
