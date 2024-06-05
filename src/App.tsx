import { Layout } from './Components/Layout'
import Table from './Components/Layout/Table'
import AnimeProvider from './Context/animeListContext'

function App() {
  return (
    <AnimeProvider>
      <Layout.Container>
        <Layout.Header />
        <Layout.Main>
          <Table />
        </Layout.Main>
      </Layout.Container>
    </AnimeProvider>
  )
}

export default App
