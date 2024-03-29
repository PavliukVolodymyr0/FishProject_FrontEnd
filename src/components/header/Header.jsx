import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/Logo.png'
import ShopCart from '../../assets/svg/ShopCart.jsx'
import { navMenu } from '../../constants/index.js'
import './Header.css'

const Header = () => {
	const location = useLocation()

	
	const isActive = link => location.pathname === link

	return (
		<header className='header'>
			<nav className='nav'>
				<Link to='/'>
					<img className='logo' src={logo} />
				</Link>
				<div className='nav_list'>
					{navMenu.map((obj, index) => (
						<Link to={obj.link} key={index}>
							<p className={isActive(obj.link) ? 'activePage' : 'nav_link'}>
								{obj.name}
							</p>
						</Link>
					))}
				</div>
				<Link to="/ShopCart">
					<div className='shopcart'>
						<ShopCart />
					</div>
				</Link>
			</nav>
		</header>
	)
}

export default Header
