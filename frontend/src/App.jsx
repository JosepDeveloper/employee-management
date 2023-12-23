import { NextUIProvider } from '@nextui-org/system'
import { Button } from "@nextui-org/button"
import './App.css'

function App() {
  return (
    <NextUIProvider>
      <div className='h-screen w-screen bg-gray-900 text-white'>
        <header></header>
        <article>
          <h1>Bienvenid@ al sistema de gestion de profesores</h1>
          <p>Usuario: Jose Oviedo</p>
          <Button
            isDisabled
            color='primary'
          >
            Example Button
          </Button>
        </article>
      </div>
    </NextUIProvider>
  )
}

export default App
