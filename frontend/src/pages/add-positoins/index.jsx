import { Card } from '@nextui-org/card'
import { ContentPage } from '../../components/content-page'
import { Header } from '../../components/header'
import { LINKS } from '../../const/links'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { Link } from 'react-router-dom'
import { setPositions } from '../../services/rootLocalStorage'
import { useNavigate } from 'react-router-dom'

export const AddPositions = () => {
  const navigation = useNavigate()

  const addPositions = (event) => {
    event.preventDefault()
    const data = Object.fromEntries(
      new FormData(event.target)
    )

    setPositions(data)
    navigation('/positions')
  }

  return (
    <ContentPage>
      <Header selectedLink={LINKS.positions} />
      <main className='pt-10 grid place-content-center'>
        <Card className='pt-[20px] bg-gray-700 bg-opacity-30 h-[550px] w-[600px]'>
          <h2 className='mt-[50px] text-2xl text-center'>Añadir empleado</h2>
          <form onSubmit={addPositions} className='mt-[130px] h-[100px] flex flex-col justify-center items-center'>
            <Input isRequired type='text' name='position' label='Puesto' className='w-[250px]' />
            <br />
            <div className='flex gap-3'>
              <Button type='submit' color='primary'>Añadir Puesto</Button>
              <Button color='danger'><Link to='/positions'>Cancelar</Link></Button>
            </div>
          </form>
        </Card>
      </main>

    </ContentPage>
  )
}
