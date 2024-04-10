import React from 'react'
import './AddCategory.css'
import Input from '../input/Input'
function AddCategory() {
	return (
		<>
			<div className='addCategoryBlock'>
				<h1>Додавання товару</h1>
				<div>
					<div className='addCategorOut'>
						<Input title={'Введіть назву'} type={'text'} />
						<Input title={'Введіть ціну'} type={'text'} />
						<select>
							<option value='' disabled selected>
								Виберіть категорію
							</option>
							<option value='option1'>Варіант 1</option>
							<option value='option2'>Варіант 2</option>
							<option value='option3'>Варіант 3</option>
						</select>
						<div className='discount'>
							<h1>Додати акцію</h1>
							<Input title={'Введіть попередню ціну'} type={'text'} />
							<Input title={'Введіть нову ціну'} type={'text'} />
							<div className='addPhotoBlocky'>
								<button className='addedProduct'>+</button>
								<p>Додати фото</p>
							</div>
							<div className='ApplyBtnn'>
								<button className='btnAccept'>Підтвердити</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AddCategory
