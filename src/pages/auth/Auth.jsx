import { useState } from 'react';
import fish1 from '../../assets/images/Fish1.png';
import fish2 from '../../assets/images/fish2.png';
import logo from '../../assets/images/Logo.png';
import './Auth.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom'

function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
	const navigate = useNavigate();
	console.log(email,password)

	const handleLogin = async (e) => {
		e.preventDefault();
		if (!email || !password) {
			setError('Будь ласка, введіть електронну пошту та пароль');
			return;
		}
	
		try {
			const params = new URLSearchParams();
			params.append('email', email);
			params.append('password', password);
	
			const response = await axios.post('https://fish.api-dev.bmax.com.ua/api/admin/login', params);
	
			if (response.status === 200) {
				const data = response.data;
				if (data.message === 'Login successful') {
					navigate('/Admin');
				} else {
					setError('Невірний email або пароль');
				}
			} else {
				setError('Невідома помилка');
			}
		} catch (error) {
			console.error('Помилка під час входу:', error);
			setError('Виникла помилка під час входу');
		}
	};

    return (
			<>
				<div className='body_auth'>
					<Link to='/'>
						<img className='logo' src={logo} alt='Logo' />
					</Link>
					<img className='fish1' src={fish1} alt='fish1' />
					<img className='fish2' src={fish2} alt='fish2' />
					<form className='auth_block' onSubmit={handleLogin}>
						<h1>Авторизація</h1>
						<input
							className='Input'
							type='text'
							placeholder='Введіть логін'
							onChange={e => setEmail(e.target.value)}
						/>
						<input
							className='Input'
							type='password'
							placeholder='Введіть пароль'
							onChange={e => setPassword(e.target.value)}
						/>

						{error && <p className='error-message'>{error}</p>}
						<button type='submit' className='button_auth'>
							Увійти
						</button>
					</form>
				</div>
			</>
		)
}

export default Auth;
