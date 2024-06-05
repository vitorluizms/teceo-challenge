import { Button, Select } from 'antd'
import { useContext, useState } from 'react'
import { IAnimeStatus } from '../../Types/animesType'
import { AnimeContext } from '../../Context/animeListContext'

interface IStatusSelect {
  defaultValue: 'Watching' | 'QUEUE' | 'Finished'
  index: number
}

function StatusSelect({ defaultValue, index }: IStatusSelect) {
  const [partialStatus, setPartialStatus] = useState<IAnimeStatus>(defaultValue)
  const { setAnimeList } = useContext(AnimeContext)

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
  ]
  const statusTranslated = {
    Watching: 'Assistindo',
    QUEUE: 'Na lista',
    Finished: 'Assistido',
  }

  const handleChangeStatus = () => {
    setAnimeList(prevList => {
      const updatedAnimesArray = [...prevList]
      updatedAnimesArray[index] = {
        ...updatedAnimesArray[index],
        status: partialStatus,
      }

      return updatedAnimesArray
    })
  }
  return (
    <div className="mt-[30px] px-[20px] flex flex-col items-end gap-[10px]">
      <Select
        options={options}
        style={{ width: '100%' }}
        defaultValue={{ value: defaultValue, label: statusTranslated[defaultValue] }}
        labelInValue
        onChange={value => {
          setPartialStatus(value.value)
        }}
      />
      <Button
        type="primary"
        size="middle"
        style={{ fontSize: '16px', fontWeight: 400, width: '60px' }}
        disabled={partialStatus === defaultValue}
        onClick={handleChangeStatus}
      >
        Editar
      </Button>
    </div>
  )
}

export default StatusSelect
