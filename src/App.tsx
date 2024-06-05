import { useState } from 'react'
import { Layout } from './Components/Layout'
import Table from './Components/Layout/Table'
import AnimeProvider from './Context/animeListContext'
import PreviewDeleteModal from './Components/Modal/PreviewDeleteModal'

function App() {
  return (
    <AnimeProvider>
      <Layout.Container>
        <PreviewDeleteModal />
        <Layout.Header />
        <Layout.Main>
          <Table />
        </Layout.Main>
      </Layout.Container>
    </AnimeProvider>
  )
}

export default App
