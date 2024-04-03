import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/Logo.png'
import ShopCart from '../../assets/svg/ShopCart.jsx'
import { navAdminMenu, navMenu } from '../../constants/index.js'
import './Header.css'
import Exit from '../../assets/svg/Exit.jsx'

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
					{location.pathname === '/adminMain'
						? navAdminMenu.map((obj, index) => (
								<Link to={obj.link} key={index}>
									<p className={isActive(obj.link) ? 'activePage' : 'nav_link'}>
										{obj.name}
									</p>
								</Link>
						  ))
						: navMenu.map((obj, index) => (
								<Link to={obj.link} key={index}>
									<p className={isActive(obj.link) ? 'activePage' : 'nav_link'}>
										{obj.name}
									</p>
								</Link>
						  ))}
					{location.pathname === '/adminMain' ? (
						<Link to='/adminMain'>
							<div className='shopcart'>
								<Exit />
							</div>
						</Link>
					) : (
						<Link to='/adminMain'>
							<div className='shopcart'>
								<ShopCart />
							</div>
						</Link>
					)}
				</div>
			</nav>
		</header>
	)
}

export default Header
