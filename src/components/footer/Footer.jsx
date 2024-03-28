import React from 'react'
import './Footer.css'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer_content'>
				<ul className='footer_list'>
					<h2 className='footer_titles'>Email</h2>
					<li>info@yourfishstore.com</li>
					<li>vovapavliuk@gmail.com</li>
				</ul>

				<ul className='footer_list'>
					<h2 className='footer_titles'>Телефони</h2>
					<li>+ 380 66 666 6666</li>
					<li>+ 380 98 228 1337</li>
				</ul>

				<ul className='footer_list'>
					<h2 className='footer_titles'>Адреса</h2>
					<li>вул. Приморська, 123, Місто, Країна</li>
				</ul>
			</div>
		</footer>
	)
}
export default Footer
