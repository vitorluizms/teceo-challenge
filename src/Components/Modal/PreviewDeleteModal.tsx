import { Modal } from 'antd'
import Table from '../Layout/Table'
import { useWindowSize } from 'react-use'
import { useContext } from 'react'
import { AnimeContext } from '../../Context/animeListContext'
import useRemoveAnime from '../../hooks/useGroupDelete'

function PreviewDeleteModal() {
  const { width } = useWindowSize()
  const { isModalOpen, setIsModalOpen } = useContext(AnimeContext)
  const { removeAnimesByIds } = useRemoveAnime()
  console.log(open)

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
      <Table />
    </Modal>
  )
}

export default PreviewDeleteModal
