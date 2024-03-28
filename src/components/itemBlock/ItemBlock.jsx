import React from 'react'
import './ItemBlock.css'
import Fish from '../../assets/images/Fish.png'
import BuyIcon from '../../assets/svg/BuyIcon.jsx'

function ItemBlock() {
	return (
		<>
			<div className='Display'>
				<img className='imgCard' src={Fish} />
				<div>
					<h1 className='NameProduct'>Fish</h1>
					<div className='InfoProduct'>
						<div className='Price'>
							<p>120грн</p>
						</div>
						<div className='Buy'>
							<BuyIcon  />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ItemBlock
