import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/table"
import { Header } from "../../components/header"
import { LINKS } from "../../const/links"
import { useCallback } from "react"
import { Tooltip } from "@nextui-org/tooltip"
import { columns } from "./data"
import { DeleteIcon } from "./DeleteIcon"
import { Link } from 'react-router-dom'
import { Pagination } from '@nextui-org/pagination'
import { useState } from "react"
import { useMemo } from "react"
import { ContentPage } from '../../components/content-page'
import { Button } from "@nextui-org/button"
import { deleteEmployee, getEmployees } from "../../services/rootLocalStorage"

export const EmployeesPage = () => {
  const users = getEmployees()
  const [page, setPage] = useState(1)
  const rowsPerPage = 4
  const pages = Math.ceil(users.length / rowsPerPage)

  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip color="danger" content="Eliminar Docente">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon onClick={
                  () => {
                    deleteEmployee(user.id)
                    location.reload()
                  }
                } />
              </span>
            </Tooltip>
          </div>
        );
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
      <Header selectedLink={LINKS.employees} />
      <main className='pt-20 grid place-content-center'>
        <div>
          <Button size='md' color='primary' className='mb-3'>
            <Link to={'/employees/add'}>Agregar Empleado</Link>
          </Button>
          <Table aria-label="Tabla de empleados" bottomContent={
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
            <TableBody emptyContent={"No hay empleados para mostrar"} items={items}>
              {(item) => (
                <TableRow key={item.id}>
                  {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </main>
    </ContentPage>
  )
}
