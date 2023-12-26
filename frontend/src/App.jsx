import { Login } from './pages/login'
import { WelcomePage } from "./pages/welcome-page"
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { NotFound } from './pages/404'

function App() {
  return (
    <Routes>
      <Route path='/' element={<WelcomePage />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
