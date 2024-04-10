import React from 'react'
import './AddProduct.css'
import Input from '../../components/input/Input'
function AddProduct() {
	return (
		<>
			<div className='AddProductBlock'>
				<div className='addProductName'>
					<h1>Додавання категорію</h1>
					<Input title={'Введіть назву категорії'} type={'text'} />
				</div>
				<div className='addPhotoBlockk'>
					<button className='addedProduct'>+</button>
					<p>Додати фото</p>
				</div>
				<button className='btnAccept'>Підтвердити</button>
			</div>
		</>
	)
}

export default AddProduct
