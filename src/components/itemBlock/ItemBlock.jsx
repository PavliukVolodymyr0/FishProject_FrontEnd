import React from 'react'
import './ItemBlock.css'
import BuyIcon from '../../assets/svg/BuyIcon.jsx'

function ItemBlock({ product }) {
	if (!product) {
		return <div>Product data is not available</div>
	}

	const handleBuyClick = () => {
		const existingCartItems =
			JSON.parse(localStorage.getItem('cartItems')) || []
		console.log(existingCartItems)
		const isProductInCart = existingCartItems.some(
			item => item.id === product.id
		)

		if (!isProductInCart) {
			const updatedCartItems = [
				...existingCartItems,
				{ id: product.id, ...product, quantity: 1 },
			]
			localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
			alert('Товар додано до корзини')
		} else {
			alert('This product is already in your cart')
		}
	}

	return (
		<div className='Display'>
			<img
				className='imgCard'
				src={`https://fish.api-dev.bmax.com.ua/storage/${product.photo}`}
				alt={product.name}
			/>
			<div>
				<h1 className='NameProduct'>{product.name}</h1>
				<div className='InfoProduct'>
					<div className='Price'>
						{product.special_price ? (
							<>
								<span className='SpecialPrice'>
									{product.special_price} грн
								</span>
								<span className='OriginalPrice'>{product.price} грн</span>
							</>
						) : (
							<span>{product.price} грн</span>
						)}
					</div>
					<div className='Buy' onClick={handleBuyClick}>
						<BuyIcon />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ItemBlock
