import './Order.css'
import { useState } from 'react';
import OrderWindow from '../../components/orderWindow/OrderWindow.jsx';

const Order = () => {
    const [windowOpen, setWindowOpen] = useState(false);

    const toggleWindow = () => {
        setWindowOpen(!windowOpen);
    };
  return (
    <>
    <div className="order_block">
            <div className="order_card" onClick={toggleWindow}>
            {windowOpen ? <OrderWindow  /> : ''}
                <h1>Замовлення</h1>
                <h2>№1</h2>
                <div className="status">
                    <h3>Статус: </h3>
                </div>
                <h1>Ціна: 300грн</h1>
            </div>
        </div>
    </>
  )
}

export default Order;