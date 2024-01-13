/* eslint-disable react/prop-types */
import { Logo } from './logo'
import { LINKS } from "../const/links"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { resetSesion } from '../services/rootLocalStorage'

/**
 * Este componente representa una barra de navegavion
 *
 * @component
 * @param {string} selectedLink Link selecionado de la navegacion
 * @returns {ReactNode}
 */
export const NavigationList = ({ selectedLink }) => {
  const navigate = useNavigate()

  const isSelected = (linkSearch) => {
    if (selectedLink === linkSearch) return 'text-blue-800'
    return ''
  }

  return (
    <nav className='h-full'>
      <ul className="flex justify-between content-between items-center h-full">
        <li>
          <Link to='/' className='w-[50px] h-[40px]'>
            <Logo />
          </Link>
        </li>
        <div className='flex flex-row gap-4'>
          <li>
            <Link to='/employees' className={isSelected(LINKS.employees)}>Empleados</Link>
          </li>
          <li>
            <Link to='/positions' className={isSelected(LINKS.positions)}>Puestos</Link>
          </li>
          <li>
            <Link to='/users' className={isSelected(LINKS.users)}>Usuarios</Link>
          </li>
          <li className='cursor-pointer' onClick={() => {
            resetSesion()
            navigate('/login')
          }}>
            Cerrar Sesión
          </li>
        </div>
      </ul>
    </nav>
  )
}
