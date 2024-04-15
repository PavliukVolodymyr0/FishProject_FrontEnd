import { useState } from 'react';
import './BasketComponent.css';
import fish from '../../assets/images/fishBasket.png'
import left from '../../assets/images/left.png'
import right from '../../assets/images/right.png'
import close from '../../assets/images/close.png'

const BasketComponent = () => {
    const [count, setCount] = useState(1);

  // Функція для збільшення значення числа на 1
  const increment = () => {
    setCount(count + 1);
  };

  // Функція для зменшення значення числа на 1, з умовою, що воно не може бути менше 1
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <>
        <div className="basket_component">
            <img src={fish} alt=""/>
            <h1>Короп</h1>
            <div className='number'>
                <img src={left} alt="-" onClick={decrement}/>
                <h1>{count}</h1>
                <img src={right} alt="+" onClick={increment}/>
            </div>
            <div className="price">
                <h1>{count * 120} грн</h1>
            </div>
            <div className="close">
                <img src={close} alt="close"/>
            </div>
        </div>
    </>
  )
}
export default BasketComponent