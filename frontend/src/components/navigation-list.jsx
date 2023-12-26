/* eslint-disable react/prop-types */
import { Logo } from './logo'
import { LINKS } from "../const/links"
import { Link } from 'react-router-dom'

/**
 * Este componente representa una barra de navegavion
 *
 * @component
 * @param {string} selectedLink Link selecionado de la navegacion
 * @returns {ReactNode}
 */
export const NavigationList = ({ selectedLink }) => {

  const isSelected = (linkSearch) => {
    if (selectedLink === linkSearch) return 'text-blue-800'
    return ''
  }

  return (
    <nav className='h-full'>
      <ul className="flex justify-between content-between items-center h-full">
        <li>
          <Link to='#' className='text-2xl'>
            <Logo />
          </Link>
        </li>
        <div className='flex flex-row gap-4'>
          <li>
            <Link to='#' className={isSelected(LINKS.employees)}>Empleados</Link>
          </li>
          <li>
            <Link to='#' className={isSelected(LINKS.positions)}>Puestos</Link>
          </li>
          <li>
            <Link to='#' className={isSelected(LINKS.users)}>Usuarios</Link>
          </li>
          <li>
            <Link to='/login'>Cerrar Sesión</Link>
          </li>
        </div>
      </ul>
    </nav>
  )
}
