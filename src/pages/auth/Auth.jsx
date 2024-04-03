import React from 'react'
import fish1 from '../../assets/images/Fish1.png'
import fish2 from '../../assets/images/fish2.png'
import logo from '../../assets/images/Logo.png'
import './Auth.css'
import Input from '../../components/input/Input'
import { Link } from 'react-router-dom'
import ForgotPassword from '../../components/forgotPassword/ForgotPassword'

function Auth() {
    const [click, setClick] = React.useState(false);

    const handleForgotPasswordClick = () => {
        setClick(true);
    };

    return (
        <>
        <div className="body_auth">
            <img src={logo} />
            <img className='fish1' src={fish1} alt='fish1' />
            <img className='fish2' src={fish2} alt='fish2' />
            <form className='auth_block'>
                {click ? <ForgotPassword /> : ''}
                <h1>Авторизація</h1>
                <Input title={'Введіть емейл'} type={'email'} />
                <Input title={'Введіть пароль'} type={'password'} />
                <p onClick={handleForgotPasswordClick} className='forgot_password'>Забули пароль?</p>
                <button className='button_auth'>Увійти</button>
                <Link to='/auth'><p className='reg'>Зареєструватись</p></Link>

            </form>
            </div>
        </>
    )
}

export default Auth
