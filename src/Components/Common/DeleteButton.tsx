import { TrashIcon } from '@heroicons/react/24/outline'
import { Button } from 'antd'

interface ButtonDeleteProps {
  deleteAction?: () => void
}

function ButtonDelete({ deleteAction }: ButtonDeleteProps) {
  return (
    <Button
      icon={<TrashIcon className="w-[14px]" />}
      size="middle"
      danger
      type="primary"
      onClick={deleteAction}
      title="Excluir selecionados"
      className="text-[14px] flex items-center justify-center"
    >
      Excluir Selecionados
    </Button>
  )
}

export default ButtonDelete
