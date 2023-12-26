import { Login } from './pages/login'
import { WelcomePage } from "./pages/welcome-page"
import { Route, Routes } from 'react-router-dom'
import './App.css'

const NotFound = () => <h1>Error 404</h1>

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
