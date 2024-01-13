import { Card } from "@nextui-org/card"
import { NextUIProvider } from "@nextui-org/system"
import { Input } from "@nextui-org/input"
import { useState } from "react";
import { EyeFilledIcon } from "../../assets/images/eye-filled-icon";
import { EyeSlashFilledIcon } from "../../assets/images/eye-slash-filled-icon";
import { Button } from "@nextui-org/button";
import { getUsers, resetLocalStorageRoot, setSesion } from "../../services/rootLocalStorage";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarIcon } from "@nextui-org/avatar";

export const Login = () => {
  const [band, setBand] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)
  const navigate = useNavigate()

  resetLocalStorageRoot()

  const redirectLogin = (event) => {
    event.preventDefault()

    const data = Object.fromEntries(
      new FormData(event.target)
    )

    const users = getUsers()

    users.forEach(element => {
      if (element.user === data.user && element.password === data.password) {
        setBand(false)
        setSesion(element.user)
        navigate('/')
      }
    })

    setBand(true)
  }

  return (
    <NextUIProvider>
      <div className='dark h-screen w-screen bg-gray-900 text-foreground font-sans grid place-content-center'>
        <Card className='bg-slate-950 w-[550px] h-[550px] flex flex-col justify-center items-center gap-5'>
          <Avatar
            icon={<AvatarIcon />}
            classNames={{
              base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
              icon: "text-black/80",
            }}
            className="w-20 h-20 text-large"
          />
          <form className='flex flex-col justify-center items-center gap-4' onSubmit={redirectLogin}>
            <Input
              type='text'
              variant='bordered'
              label='Usuario'
              className='w-[300px]'
              name='user'
              isInvalid={band}
              errorMessage={band && 'Usuario Incorrecto'}
              isRequired
            />
            <Input
              type={isVisible ? "text" : "password"}
              variant='bordered'
              label='Contraseña'
              className='w-[300px]'
              name='password'
              endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              isInvalid={band}
              errorMessage={band && 'Contraseña Incorrecto'}
              isRequired
            />
            <Button type="submit" color='primary' className='w-[150px]'>Entrar al Sistema</Button>
          </form>
        </Card>
      </div>
    </NextUIProvider>
  )
}
