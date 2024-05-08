import React from 'react';
import fish from '../../assets/images/fishBasket.png'
import left from '../../assets/images/left.png'
import right from '../../assets/images/right.png'
import close from '../../assets/images/close.png'
import './Basket.css'

function Basket() {
    const [cartItems, setCartItems] = React.useState(JSON.parse(localStorage.getItem('cartItems')) || []);
  
    const removeFromCart = (index) => {
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(index, 1);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      setCartItems(updatedCartItems);
    };
    
    const handleOrderClick = () => {
      // Отримайте дані з корзини і збережіть їх у локальне сховище
      localStorage.setItem('orders', JSON.stringify(cartItems));
      console.log(JSON.parse(localStorage.getItem('orders')));
      // Після збереження можна видалити дані з корзини, якщо це потрібно
      localStorage.removeItem('cartItems');
      // Також, якщо потрібно, можна оновити стан корзини, наприклад, очистити її
      setCartItems([]);
    };

    const incrementQuantity = (index) => {
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].quantity++;
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      setCartItems(updatedCartItems);
    };
  
    const decrementQuantity = (index) => {
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].quantity--;
      if (updatedCartItems[index].quantity === 0) {
        removeFromCart(index); // Видалення з корзини, якщо кількість стає 0
      } else {
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
      }
    };
  
    const calculateTotalPrice = () => {
      return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };
  
    return (
      <>
        <div className="block1">
          {cartItems.map((item, index) => (
            <div className="basket_component" key={index}>
              <img src={item.photo} alt="" />
              <h1>{item.name}</h1>
              <div className='number'>
                <img src={left} alt="-" onClick={() => decrementQuantity(index)} />
                <h1>{item.quantity}</h1>
                <img src={right} alt="+" onClick={() => incrementQuantity(index)} />
              </div>
              <div className="price">
                <h1>{item.price * item.quantity} грн</h1>
              </div>
              <div className="close" onClick={() => removeFromCart(index)}>
                <img src={close} alt="close" />
              </div>
            </div>
          ))}
        </div>
        <div className="button_basket">
          <div className="price_basket">
            <h1>Сума: {calculateTotalPrice()} грн</h1>
          </div>
          <button className='basket_bt' onClick={() => handleOrderClick()}>Замовити</button>
        </div>
      </>
    )
  }
  
  export default Basket;