import { TrashIcon } from '@heroicons/react/24/outline'
import { Button } from 'antd'
import { useContext } from 'react'
import { AnimeContext } from '../../Context/animeListContext'
import useRemoveAnime from '../../hooks/useGroupDelete'

function ButtonDelete() {
  const { animesToRemove } = useContext(AnimeContext)
  const { removeAnimesByIds } = useRemoveAnime()

  return (
    <Button
      icon={<TrashIcon className="w-[14px]" />}
      size="middle"
      danger
      type="primary"
      onClick={() => removeAnimesByIds(animesToRemove)}
      title="Excluir selecionados"
      disabled={animesToRemove.length <= 0}
      className="text-[14px] flex items-center justify-center"
    >
      Excluir Selecionados
    </Button>
  )
}

export default ButtonDelete
