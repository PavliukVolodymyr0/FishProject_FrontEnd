import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'

import Main from './pages/main/Main'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Auth from './pages/auth/Auth'
import AdminMain from './pages/adminMain/AdminMain'
import Admin from './pages/admin/Admin'
import Order from './pages/order/Order'
import AdminOrder from './pages/adminOrder/AdminOrder'
import Basket from './pages/basket/Basket'
import Kategory from './pages/kategory/Kategory'


function App() {
	const location = useLocation()
	return (
		<div className='wrapper'>
			{location.pathname !== '/auth' && <Header />}
			<div className='content'>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/auth' element={<Auth />} />
					<Route path='/adminMain' element={<AdminMain />} />
					<Route path='/admin' element={<Admin />} />
					<Route path='/order' element={<Order />} />
					<Route path='/adminOrder' element={<AdminOrder/>} />
					<Route path='/basket' element={<Basket/>} />
					<Route path='/kategory' element={<Kategory/>} />
				</Routes>
			</div>
			{location.pathname !== '/auth' && <Footer />}
		</div>
	)
}

export default App
