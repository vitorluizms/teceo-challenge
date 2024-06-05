import ButtonDelete from '../../Common/DeleteButton'
import { ChangeEvent, useContext } from 'react'
import { AnimeContext } from '../../../Context/animeListContext'
import Search, { SearchProps } from 'antd/es/input/Search'
import { Popover } from 'antd'
import FilterButton from './FilterButton'
import StatusSelect from '../../Common/PopoverFilterStatus'

function LayoutHeader() {
  const { setInputSearch } = useContext(AnimeContext)

  const onSearch: SearchProps['onSearch'] = (value, _e, _info) => {
    setInputSearch(value)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value)
  }

  return (
    <header className="w-full flex flex-col gap-8">
      <section className="w-full flex justify-between items-center">
        <article className="flex flex-col gap-1">
          <h1 className="text-h1">Meus animes</h1>
          <h2 className="text-h2">Gerencie a sua lista de animes</h2>
        </article>
        <figure className="w-[50px] h-[50px]">
          <img
            src="https://i.pinimg.com/originals/e1/7a/9b/e17a9bfa7eecb18ce103e0c1f7290c0f.jpg"
            alt="Imagem redonda"
            className="w-full h-full object-cover rounded-full"
          />
        </figure>
      </section>
      <section className="w-full flex gap-3">
        <Search
          placeholder="Pesquise um anime"
          allowClear
          size="large"
          style={{ width: '250px' }}
          enterButton
          onSearch={onSearch}
          onChange={onChange}
        />
        <Popover placement="bottomLeft" trigger="click" title="Filtrar por status" content={<StatusSelect />}>
          <FilterButton />
        </Popover>
        <ButtonDelete />
      </section>
    </header>
  )
}

export default LayoutHeader
