import { Login } from './pages/login'
import { WelcomePage } from "./pages/welcome-page"
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { NotFound } from './pages/404'
import { EmployeesPage } from './pages/employees'
import { AddEmploye } from './pages/add-employee'
import { PositionsPage } from './pages/positions-page'
import { AddPositions } from './pages/add-positoins'
import { UsersPage } from './pages/users-page'
import { AddUsers } from './pages/add-users'

function App() {
  return (
    <Routes>
      <Route path='/' element={<WelcomePage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/employees' element={<EmployeesPage />} />
      <Route path='/employees/add' element={<AddEmploye />} />
      <Route path='/positions' element={<PositionsPage />} />
      <Route path='/positions/add' element={<AddPositions />} />
      <Route path='/users' element={<UsersPage />} />
      <Route path='/users/add' element={<AddUsers />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
