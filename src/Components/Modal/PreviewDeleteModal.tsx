import { Modal } from 'antd'
import { useWindowSize } from 'react-use'
import { useContext } from 'react'
import { AnimeContext } from '../../Context/animeListContext'
import useRemoveAnime from '../../hooks/useGroupDelete'
import TablePreview from '../Layout/Table/TablePreview'

function PreviewDeleteModal() {
  const { width } = useWindowSize()
  const { isModalOpen, setIsModalOpen, animesToRemove } = useContext(AnimeContext)
  const { removeAnimesByIds } = useRemoveAnime()

  return (
    <Modal
      width={(2 * width) / 3}
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onCancel={() => setIsModalOpen(false)}
      onOk={() => {
        removeAnimesByIds()
        setIsModalOpen(false)
      }}
      cancelText="Cancelar"
      okText="Excluir"
      title="Revise os animes para excluir"
      closable={true}
    >
      <TablePreview data={animesToRemove} />
    </Modal>
  )
}

export default PreviewDeleteModal
