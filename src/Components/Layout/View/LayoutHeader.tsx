import ButtonDelete from '../../Common/DeleteButton'

function LayoutHeader() {
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
      <section>
        <ButtonDelete />
      </section>
    </header>
  )
}

export default LayoutHeader
