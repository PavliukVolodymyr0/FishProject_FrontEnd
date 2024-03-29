import React from 'react';
import Input from '../input/Input'
import './ForgotPassword.css'
import PasswordRecovery from '../passwordRecovery/PasswordRecovery';

const ForgotPassword = () => {
    const [click, setClick] = React.useState(false);

    const handlePasswordRecoveryClick = (event) => {
        event.preventDefault(); 
        setClick(true);
    };
  return (
    <>
    <div className='forgot_block'>
        {click ? <PasswordRecovery /> : ''}
        <h1>Відновлення паролю</h1>
        <Input title={'Введіть емейл'}type={'email'}/>
        <button onClick={handlePasswordRecoveryClick} className='button_auth'>Далі</button>
    </div>
    <div className="overlay"></div>
    </>
  )
}

export default ForgotPassword