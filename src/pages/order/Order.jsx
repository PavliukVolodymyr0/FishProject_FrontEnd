import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Order.css'
import NewPost from '../../assets/images/NewPost.png'
import UaPost from '../../assets/images/UaPost.png'
import Pickup from '../../assets/images/Pickup.png'
import { useNavigate } from 'react-router-dom'

function Order() {
	const [surname, SetSurName] = useState('')
	const [name, SetName] = useState('')
	const [phone_number, SetPhoneNumber] = useState('')
	const [patronymic, SetPatronymic] = useState('')
	const [city, SetCity] = useState('')
	const [street, SetStreet] = useState('')
	const [house, SetHouse] = useState('')
	const [send_type, SetSend_type] = useState('')
	const [payment_type, SetPaymentType] = useState('card')
	const [status, SetStatus] = useState('0')
	const [items, SetItems] = useState([]) 

	const navigate = useNavigate()

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem('orders')) || []
		console.log('Stored Data:', storedData)

		const isFish = item => {
			return item.category_id === 1
		}

		const combinedItems = storedData
			.filter(item => isFish(item))
			.map(item => ({
				id: item.id,
				quantity: item.quantity,
			}))

		console.log('Filtered Fish Items:', combinedItems)
		SetItems(combinedItems)
	}, [])

	async function addOrder() {
		if (!patronymic.trim()) {
			alert('Please enter patronymic')
			return
		}

		const orderData = {
			city: city,
			street: street,
			house: house,
			surname: surname,
			name: name,
			patronymic: patronymic,
			phone_number: phone_number,
			payment_type: payment_type,
			send_type: send_type,
			order: items, 
		}

		console.log('Order Data:', orderData)

		try {
			const response = await axios.post(
				'https://fish.api-dev.bmax.com.ua/api/order',
				orderData,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)

			console.log('Response:', response.data)
			alert('Data has been saved')
			navigate(`/`)
		} catch (error) {
			console.error(
				'Error:',
				error.response ? error.response.data : error.message
			)
			alert('Error saving data')
		}
	}

	return (
		<>
			<div className='orderBlock'>
				<h1>Введіть особисті дані</h1>
				<div className='orderInfo'>
					<div className='userInfo'>
						<input
							type='text'
							name='name'
							onChange={e => SetName(e.target.value)}
							placeholder='Введіть імя'
						/>
						<input
							type='text'
							onChange={e => SetSurName(e.target.value)}
							name='lastname'
							placeholder='Введіть прізвище'
						/>
						<input
							type='text'
							onChange={e => SetPatronymic(e.target.value)}
							name='patronymic'
							placeholder='Введіть По-батькові'
						/>
						<input
							type='text'
							name='phone'
							onChange={e => SetPhoneNumber(e.target.value)}
							placeholder='Введіть номер телефону'
						/>
					</div>
					<div className='cityInfo'>
						<input
							type='text'
							onChange={e => SetCity(e.target.value)}
							name='city'
							placeholder='Введіть місто'
						/>
						<input
							type='text'
							onChange={e => SetStreet(e.target.value)}
							name='street'
							placeholder='Введіть вулицю'
						/>
						<input
							type='text'
							onChange={e => SetHouse(e.target.value)}
							name='house'
							placeholder='Введіть будинок'
						/>
					</div>
					<div className='postInfo'>
						<div className='postBlock'>
							<div className='postImg'>
								<input
									type='radio'
									name='send_type'
									value='NewPost'
									checked={send_type === 'NewPost'}
									onChange={e => SetSend_type(e.target.value)}
								/>
								<img src={NewPost} width={162} alt='newPost' />
							</div>
							<div className='postImg'>
								<input
									type='radio'
									name='send_type'
									value='UaPost'
									checked={send_type === 'UaPost'}
									onChange={e => SetSend_type(e.target.value)}
								/>
								<img src={UaPost} width={162} alt='uaPost' />
							</div>
							<div className='postImg'>
								<input
									type='radio'
									name='send_type'
									value='Pickup'
									checked={send_type === 'Pickup'}
									onChange={e => SetSend_type(e.target.value)}
								/>
								<img src={Pickup} width={162} alt='pickup' />
							</div>
						</div>
						<span className='orderBasicInfo'>
							* Оплата тільки при отриманні
						</span>
					</div>
				</div>
				<div>
					<button onClick={addOrder} className='orderComplete'>
						Підтвердити
					</button>
				</div>
			</div>
		</>
	)
}

export default Order
