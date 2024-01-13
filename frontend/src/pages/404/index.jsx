import { Link } from "react-router-dom";
import { ContentPage } from "../../components/content-page";

export const NotFound = () => (
  <ContentPage>
    <main className='h-full w-full grid place-content-center gap-7'>
      <header>
        <h1 className='pb-4 text-center text-5xl font-bold font-mono'>404 Pero...</h1>
        <img
          src="/public/images/this-is-fine-404.gif"
          alt="Una imagen graciosa del tipico meme de this is fine"
          title='This is Fine'
          className='h-auto w-[500px] rounded-3xl'
        />
      </header>
      <p
        className='text-center text-xl text-gray-500'
      >
        Aqui tienes un enlace para ir al
        {' '}
        <Link
          to='/'
          className='text-blue-900'>
          inicio
        </Link>
      </p>
    </main>
  </ContentPage>
)
