import { Card } from '@nextui-org/card'
import { ContentPage } from '../../components/content-page'
import { Avatar, AvatarIcon } from '@nextui-org/avatar'
import { Logo } from '../../components/logo.jsx'
import { Input } from '@nextui-org/input'
import { useState } from 'react'
import { EyeSlashFilledIcon } from '../../assets/images/eye-slash-filled-icon.jsx'
import { EyeFilledIcon } from '../../assets/images/eye-filled-icon.jsx'
import { Button } from '@nextui-org/button'
import { useNavigate } from 'react-router-dom'


export const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const redirectIndex = (event) => {
    event.preventDefault()
    navigate('/')
  }

  return (
    <ContentPage>
      <main className='h-full w-full grid place-content-center'>
        <Card className='bg-gray-700 bg-opacity-30 h-[550px] w-[500px] flex gap-5 justify-center items-center'>
          <Avatar
            icon={<AvatarIcon />}
            isBordered
            className="w-28 h-28 text-large"
            classNames={{
              base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
              icon: "text-black/80",
            }}
          />
          <Logo className='text-xl' />
          <form className='flex flex-col gap-2' onSubmit={redirectIndex}>
            <Input type="text" label="Usuario" size='sm' className='w-[300px]' variant='bordered' />
            <Input
              label='Contraseña'
              size='sm'
              className='w-[300px]'
              variant='bordered'
              endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>}

              type={isVisible ? "text" : "password"}
            />
            <button>
              <Button color='primary' radius='sm'>
                Entrar al Sistema
              </Button>
            </button>
          </form>
        </Card>
      </main>
    </ContentPage >
  )
}
