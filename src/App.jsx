import './App.css'
import { Route, Routes } from 'react-router-dom'

import Main from './pages/main/Main'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<Routes>
					<Route path='/' element={<Main />} />
					
				</Routes>
			</div>
			<Footer />
		</div>
	)
}

export default App
