import Input from "../input/Input"
import './PasswordRecovery.css'
const PasswordRecovery = () => {
  return (
    <>
    <form className='recovery_block'>
        <h1>Відновлення паролю</h1>
        <Input title={'Введіть емейл'}type={'email'}/>
        <p className='recovery_password'>Пароль повинен містити від 6 символів!</p>
        <Input title={'Підтвердіть пароль'}type={'password'}/>
        <button className='button_auth'>Далі</button>
    </form>
    <div className="overlay"></div>
    </>
  )
}

export default PasswordRecovery