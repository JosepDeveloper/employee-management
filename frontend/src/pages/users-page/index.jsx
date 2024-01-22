import { useState } from 'react'
import { ContentPage } from '../../components/content-page'
import { Header } from '../../components/header'
import { LINKS } from '../../const/links'
import { useCallback } from 'react'
import { Tooltip } from '@nextui-org/tooltip'
import { DeleteIcon } from '../employees/DeleteIcon'
import { EditIcon } from '../employees/EditIcon'
import { useMemo } from 'react'
import { Button } from '@nextui-org/button'
import { Link } from 'react-router-dom'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/table'
import { Pagination } from '@nextui-org/pagination'
import { columns } from './data'
import { deleteUser, getUsers, updateUser } from '../../services/rootLocalStorage'
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/modal'
import { Input } from '@nextui-org/input'
import { EyeSlashFilledIcon } from '../../assets/images/eye-slash-filled-icon'
import { EyeFilledIcon } from '../../assets/images/eye-filled-icon'

export const UsersPage = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)
  const [page, setPage] = useState(1)
  const users = getUsers()
  const rowsPerPage = 4
  const pages = Math.ceil(users.length / rowsPerPage)

  const handleClickDelete = (id) => {
    if (id === 1) {
      alert('Este es el Usuario root no se puede eleminar')
      return
    }
    deleteUser(id)
    location.reload()
  }

  const submitUpdateUser = (id, user, password) => {
    updateUser(id, user, password)
    location.reload()
  }

  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip className='dark text-foreground bg-background' content='Editar Usuario'>
              <span className='text-lg text-default-400 cursor-pointer active:opacity-50'>
                <EditIcon onClick={
                  () => {
                    if (user.id === 1) {
                      alert('El usuario root no se puede actualizar')
                      return
                    }
                    sessionStorage.setItem('id', user.id)
                    sessionStorage.setItem('user', user.user)
                    sessionStorage.setItem('password', user.password)
                    onOpen()
                  }
                } />
              </span>
            </Tooltip >
            <Tooltip color="danger" content="Eliminar Docente">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon onClick={() => handleClickDelete(user.id)} />
              </span>
            </Tooltip>
          </div >
        );
      case 'password':
        return <span>****</span>
      default:
        return cellValue;
    }
  }, []);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users])

  return (
    <ContentPage>
      <Header selectedLink={LINKS.users} />
      <main className='pt-20 grid place-content-center'>
        <div>
          <Button size='md' color='primary' className='mb-3'>
            <Link to={'/users/add'}>Agregar Usuarios</Link>
          </Button>
          <Table aria-label="Tabla de Posisiones" bottomContent={
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="secondary"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
            </div>
          }>
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody emptyContent={"No hay usuarios para mostrar"} items={items}>
              {(item) => (
                <TableRow key={item.id}>
                  {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </main>
      <Modal backdrop='blur' isOpen={isOpen} onOpenChange={onOpenChange} className='dark text-foreground bg-background'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Editar el Usuario: {sessionStorage.getItem('user')}</ModalHeader>
              <ModalBody>
                <form onSubmit={(event) => {
                  event.preventDefault()
                  const data = Object.fromEntries(
                    new FormData(event.target)
                  )
                  submitUpdateUser(Number(sessionStorage.getItem('id')), data.user, data.password)
                }} className='flex flex-col justify-center items-center'>
                  <Input
                    isRequired
                    type='text'
                    name='user'
                    label='Usuario'
                    className='w-[250px] mb-6'
                    defaultValue={sessionStorage.getItem('user')}
                  />
                  < Input
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
                    defaultValue={sessionStorage.getItem('password')}
                    name='password'
                    label='Contraseña'
                    className='w-[250px] mb-6'
                  />
                  <div className='flex gap-3 mb-10'>
                    <Button type='submit' color='primary'>Añadir Puesto</Button>
                    <Button color='danger' onPress={onClose}>Cancelar</Button>
                  </div>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </ContentPage>
  )

}
