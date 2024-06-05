import { ChevronRightIcon, PencilIcon } from '@heroicons/react/24/outline'
import { Dispatch, SetStateAction } from 'react'
import StatusSelect from './StatusSelect'
import { IAnimeStatus } from '../../Types/animesType'

interface PopoverOptionsContent {
  screen: 'menu' | 'status'
  setScreen: Dispatch<SetStateAction<'menu' | 'status'>>
  status: IAnimeStatus
  index: number
}

export default function PopoverOptionsContent({ screen, setScreen, status, index }: PopoverOptionsContent) {
  if (screen === 'status') {
    return <StatusSelect defaultValue={status} index={index} />
  }
  return (
    <button
      className="flex justify-between items-center  mt-[15px] w-[200px] h-[38px] cursor-pointer"
      type="button"
      onClick={() => setScreen('status')}
    >
      <div className="flex gap-[10px]">
        <PencilIcon className="w-[20px] text-gray-BFBFBF" />
        <span className="text-[14px] font-normal">Editar status</span>
      </div>
      <ChevronRightIcon className="w-[16px]" />
    </button>
  )
}
