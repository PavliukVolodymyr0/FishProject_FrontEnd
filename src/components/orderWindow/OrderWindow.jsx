import '../../pages/adminOrder/adminOrder.css';
import { useState } from 'react';
import axios from 'axios';

const OrderWindow = ({ order, onClose }) => { // Приймайте order і onClose як пропс
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleConfirm = async () => {
        if (order.status !== 2) { // Перевірка чи статус не 2
            try {
                setIsSubmitting(true); // Встановлення статусу відправки запиту
                await axios.post('https://fish.api-dev.bmax.com.ua/api/admin/editorder', {
                    id: order.id,
                    status: 2 // Зміна статусу на 2
                });
                // Оновлення статусу на фронтенді (якщо необхідно)
                onClose(); // Закриття вікна після успішної відправки
            } catch (error) {
                console.error('Error confirming order:', error);
            } finally {
                setIsSubmitting(false); // Скидання статусу відправки запиту
            }
        }
    };
    return (
        <div className="window_order">
            <h1>Замовлення №{order.id}</h1> {/* Використовуйте дані order */}
            <div className="price_adress">
                <div className="order_details">
                    {order.ordered_products.map(product => (
                        <div className="price_block" key={product.id}>
                            <div className="price_card">
                                <div className="left_block">
                                    <h3>{product.product.name}</h3>
                                    <h2>Кількість: {product.quantity}</h2>
                                </div>
                                <div className="right_block">
                                    <h3>Ціна: {product.product.price * product.quantity}грн</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="address_details">
                    <h1>Місто: {order.city}</h1>
                    <h1>Відділення №{order.house}</h1>
                    <h1>Номер замовника: {order.phone_number}</h1>
                    <h1>{order.surname} {order.name}</h1>
                </div>
            </div>
            <button className='Button_Order' onClick={onClose}>Закрити</button>
            {order.status !== 2 && ( // Перевірка чи статус не 2
                <button className='Button_Order1' onClick={handleConfirm} disabled={isSubmitting}> {/* Додайте обробник подій та встановіть властивість disabled */}
                    {isSubmitting ? 'Виконується...' : 'Підтвердити'} {/* Відображення тексту залежно від стану відправки */}
                </button>
            )}
        </div>
    );
}

export default OrderWindow;
