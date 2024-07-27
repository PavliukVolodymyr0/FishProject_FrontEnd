import React, { useState } from 'react'
import './AddCategory.css'

function AddCategory() {
	const [category_id, setCategoryId] = useState('')
	const [name, setName] = useState('')
	const [price, setPrice] = useState('')
	const [photo, setPhoto] = useState(null)
	const [specialPrice, setSpecialPrice] = useState('')

	async function addProduct() {
		console.warn(name, price, photo, category_id, specialPrice)
		const formData = new FormData()
		formData.append('name', name)
		formData.append('price', price)
		formData.append('category_id', category_id)
		formData.append('photo', photo)

		if (specialPrice) {
			formData.append('special_price', specialPrice)
		}

		let result = await fetch('http://127.0.0.1:8000/api/admin/addproduct', {
			method: 'POST',
			body: formData,
		})

		alert('Product added')
	}

	const handlePhotoChange = e => {
		setPhoto(e.target.files[0])
	}

	const handleIconClick = () => {
		document.getElementById('photoInput').click()
	}

	return (
		<div className='addCategoryBlock'>
			<h1>Додавання товару</h1>
			<div>
				<div className='addCategoryOut'>
					<input
						type='text'
						placeholder='Введіть назву'
						onChange={e => setName(e.target.value)}
					/>
					<input
						type='text'
						placeholder='Введіть ціну'
						onChange={e => setPrice(e.target.value)}
					/>
					<input
						type='text'
						placeholder='Введіть категорію'
						onChange={e => setCategoryId(e.target.value)}
					/>
					<div className='discount'>
						<h1>Додати акцію</h1>
						<input type='text' placeholder='Введіть попередню ціну' />
						<input
							type='text'
							placeholder='Введіть нову акційну ціну'
							onChange={e => setSpecialPrice(e.target.value)}
						/>
						<div className='addPhotoBlocky'>
							<p>Додати фото</p>
							<div
								onClick={handleIconClick}
								style={{ cursor: 'pointer', display: 'inline-block' }}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 50 50'
									width='50px'
									height='50px'
								>
									<path d='M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z' />
								</svg>
							</div>
							<input
								type='file'
								id='photoInput'
								onChange={handlePhotoChange}
								style={{ display: 'none' }}
							/>
						</div>
						<div className='ApplyBtnn'>
							<button onClick={addProduct} className='btnAccept'>
								Підтвердити
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddCategory
