import React from 'react'
import './Order.css'
import Input from '../../components/input/Input'
import NewPost from '../../assets/images/NewPost.png'
import UaPost from '../../assets/images/UaPost.png'
import Pickup from '../../assets/images/Pickup.png'
function Order() {
	return (
		<>
			<div className='orderBlock'>
				<h1>Введіть особисті дані</h1>
				<div className='orderInfo'>
					<div className='userInfo'>
						<Input title={'Введіть ім`я'} type={'text'} />
						<Input title={'Введіть прізвище'} type={'text'} />
						<Input title={'Введіть номер телефону'} type={'phone'} />
					</div>
					<div className='cityInfo'>
						<Input title={'Введіть місто '} type={'text'} />
						<Input title={'Введіть номер відділення '} type={'text'} />
					</div>
					<div className='postInfo'>
						<div className='postBlock'>
							<div className='postImg'>
								<Input type={'radio'} />
								<img src={NewPost} width={162} alt='newPost' />
							</div>
							<div className='postImg'>
								<Input type={'radio'} />
								<img src={UaPost} width={162} alt='uaPost' />
							</div>
							<div className='postImg'>
								<Input type={'radio'} />
								<img src={Pickup} width={162} alt='pickup' />
							</div>
						</div>
						<span className='orderBasicInfo'>
							* Оплата тільки при отриманні
						</span>
					</div>
				</div>
				<div>
					<button className='orderComplete'>Підтвердити</button>
				</div>
			</div>
		</>
	)
}

export default Order
