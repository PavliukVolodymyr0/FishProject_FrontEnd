import './adminOrder.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import OrderWindow from '../../components/orderWindow/OrderWindow.jsx';

function AdminOrder() {
    const [windowOpen, setWindowOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        console.log('Fetching data...');
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/admin/orders');
            console.log(response.data.orders);
            setOrders(response.data.orders);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const toggleWindow = (order) => {
        setSelectedOrder(order); 
        setWindowOpen(!windowOpen);
    };

    return (
        <>
            <div className="block">
                {orders.length > 0 ? (
                    orders.map(order => (
                        <div className="order_block" key={order.id}>
                            <div className="order_card" onClick={() => toggleWindow(order)}> 
                                <h1>Замовлення</h1>
                                <h2>№{order.id}</h2>
                                <div className="status">
                                    <h3>Статус: {order.status === 1 ? 'Не підтверджено' : 'Підтверджено'}</h3>
                                </div>
                                <h1>Ціна: {order.total_price}грн</h1>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Дані замовлень відсутні</p>
                )}
            </div>
            {windowOpen && <OrderWindow order={selectedOrder} onClose={() => setWindowOpen(false)} />} 
        </>
    );
}

export default AdminOrder;
