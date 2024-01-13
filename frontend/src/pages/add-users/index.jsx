import { useNavigate } from "react-router-dom"
import { ContentPage } from "../../components/content-page"
import { Header } from "../../components/header"
import { Card } from "@nextui-org/card"
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { Link } from "react-router-dom"
import { LINKS } from "../../const/links"
import { useState } from "react"
import { EyeSlashFilledIcon } from "../../assets/images/eye-slash-filled-icon"
import { EyeFilledIcon } from "../../assets/images/eye-filled-icon"
import { setUsers } from "../../services/rootLocalStorage"

export const AddUsers = () => {
  const navigation = useNavigate()
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)

  const addNewUser = (event) => {
    event.preventDefault()
    const data = Object.fromEntries(
      new FormData(event.target)
    )

    setUsers(data)
    navigation('/users')
  }

  return (
    <ContentPage>
      <Header selectedLink={LINKS.users} />
      <main className='pt-10 grid place-content-center'>
        <Card className='pt-[20px] bg-gray-700 bg-opacity-30 h-[550px] w-[600px]'>
          <h2 className='mt-[50px] text-2xl text-center'>Añadir Usuario</h2>
          <form onSubmit={addNewUser} className='mt-[130px] h-[100px] flex flex-col justify-center items-center'>
            <Input isRequired type='text' name='user' label='Usuario' className='w-[250px] mb-6' />
            <Input
              isRequired
              type={isVisible ? "text" : "password"}
              endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              name='password'
              label='Contraseña'
              className='w-[250px]'
            />
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
