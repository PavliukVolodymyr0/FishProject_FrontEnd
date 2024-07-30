import React, { useState } from 'react'
import './AddProduct.css'

function AddProduct() {
	const [name, setName] = useState('')
	const [photo, setPhoto] = useState('')

	async function addCategory() {
		console.warn(name, photo)
		const formData = new FormData()
		formData.append('name', name)
		formData.append('photo', photo)

		let result = await fetch('https://fish.api-dev.bmax.com.ua/api/admin/addcategory', {
			method: 'POST',
			body: formData,
		})
		alert('add')
	}

	const handlePhotoChange = e => {
		setPhoto(e.target.files[0])
	}

	const handleIconClick = () => {
		document.getElementById('photoInput').click()
	}

	return (
		<div className='AddProductBlock'>
			<div className='addProductName'>
				<h1>Додавання категорію</h1>
				<input
					type='text'
					placeholder='Введіть назву категорії'
					onChange={e => setName(e.target.value)}
					className='inputAddProduct'
				/>
			</div>
			<div className='addPhotoBlockk'>
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
			<button onClick={addCategory} className='btnAccept'>
				Підтвердити
			</button>
		</div>
	)
}

export default AddProduct
