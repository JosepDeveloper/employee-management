/* eslint-disable react/prop-types */
import { NavigationList } from './navigation-list'

/**
 * Este componente representa el header que cada pagina deberia tener
 *
 * @component
 * @param {string} selectedLink el link seleccionado por la pagina
 * @returns {ReactNode}
 */
export const Header = ({ selectedLink = '' }) => {
  return (
    <header className="px-5 h-[7%] w-full bg-gray-800">
      <NavigationList selectedLink={selectedLink} />
    </header>
  )
}
