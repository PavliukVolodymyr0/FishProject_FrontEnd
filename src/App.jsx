import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'

import Main from './pages/main/Main'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Auth from './pages/auth/Auth'
import Admin from './pages/admin/Admin'

function App() {
  const location = useLocation()
  return (
    <div className='wrapper'>
      {location.pathname !== '/auth' && <Header />}
      <div className='content'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/Admin' element={<Admin/>}/>
        </Routes>
      </div>
      {location.pathname !== '/auth' && <Footer />}
    </div>
  )
}

export default App
