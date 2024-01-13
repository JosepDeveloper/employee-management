/* eslint-disable react/prop-types */
import { NextUIProvider } from '@nextui-org/system'
import { redirectToLogin, resetLocalStorageRoot } from '../services/rootLocalStorage'

/**
 *  Este componente representa el layout de cada pagina
 *
 *  @component
 *  @param {ReactNode} children  JSX de los elementos hijos
 *  @return {ReactNode} El elemento de React que se va a renderizar
 */
export const ContentPage = ({ children }) => {
  resetLocalStorageRoot()

  if (redirectToLogin()) {
    location.href = '/login'
  }

  return (
    <NextUIProvider>
      <div className='dark h-screen w-screen bg-gray-900 text-foreground font-sans'>
        {children}
      </div>
    </NextUIProvider>
  )
}
