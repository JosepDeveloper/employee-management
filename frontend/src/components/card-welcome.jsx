/* eslint-disable */
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from '@nextui-org/divider'

/**
 * Este componente retorna la card de bienvenda del usuario
 * @component
 * @returns {ReactNode}
 */
export const CardWelcome = ({ user }) => {
  return (
    <article className="h-[93%] flex justify-center items-center">
      <Card className="bg-gray-700 bg-opacity-30 h-4/5 w-8/12" >
        <CardHeader className="h-1/5 pl-10">
          <h1 className='text-2xl'>Bienvenid@ al sistema de gestion de personal administrativo</h1>
        </CardHeader>
        <Divider />
        <CardBody className="h-4/5 pl-10 pt-20 flex flex-col gap-20">
          <h2 className='text-xl'>Usuario: {user}</h2>
          <Button
            isDisabled
            color='primary'
            className="max-w-[300px]"
          >
            Example Button
          </Button>
        </CardBody>
      </Card>
    </article>
  )
}
