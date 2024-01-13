import { Card } from '@nextui-org/card'
import { ContentPage } from '../../components/content-page'
import { Header } from '../../components/header'
import { LINKS } from '../../const/links'
import { Input } from '@nextui-org/input'
import { Select } from '@nextui-org/select'
import { SelectItem } from '@nextui-org/select'
import { Button } from '@nextui-org/button'
import { Link, useNavigate } from 'react-router-dom'
import { addEmployeeElement, getPositions } from '../../services/rootLocalStorage'

export const AddEmploye = () => {
  const position = getPositions()
  const navigation = useNavigate()

  const addEmployee = (event) => {
    event.preventDefault()
    const data = Object.fromEntries(
      new FormData(event.target)
    )
    addEmployeeElement(data)
    navigation('/employees')
  }

  return (
    <ContentPage>
      <Header selectedLink={LINKS.employees} />
      <main className='pt-10 grid place-content-center'>
        <Card className='pt-[20px] bg-gray-700 bg-opacity-30 h-[550px] w-[600px]'>
          <h2 className='text-2xl text-center'>Añadir empleado</h2>
          <form onSubmit={addEmployee} className='mt-[30px] h-[100px] flex justify-evenly flex-wrap gap-5'>
            <Input type='text' label='Primer Nombre' className='w-[250px]' name='primerNombre' />
            <Input type='text' label='Segundo Nombre' className='w-[250px]' name='segundoNombre' />
            <Input type='text' label='Primer Apellido' className='w-[250px]' name='primerApellido' />
            <Input type='text' label='Segundo Apellido' className='w-[250px]' name='segundoApellido' />
            <Select name='position' label='Puesto' placeholder='Selecciona un Puesto' className='w-[250px]'>
              {
                position.map(element => {
                  return <SelectItem key={element.id} value={element.position}>{element.position}</SelectItem>
                })
              }
            </Select>
            <Input type='datetime-local' label='Fecha de Ingreso' className='w-[250px]' name='date' />
            <Button color='primary' type='submit'>Añadir Empleado</Button>
            <Button color='danger'><Link to='/employees'>Cancelar</Link></Button>
          </form>
        </Card>
      </main>
    </ContentPage>
  )
}
