import '../order/Order.css';

const OrderWindow = () => {
  return (
    <div className="window_order">
            <h1>Замовлення №1</h1>
            <div className="price_adress">
                <div className="price_block">
                    <div className="price_card">
                        <div className="left_block">
                            <h3>Окунь</h3>
                            <h2>Кількість:2</h2>
                        </div>
                        <div className="right_block">
                            <h3>Ціна: 400грн</h3>
                        </div>
                    </div>
                    <div className="price_card">
                        <div className="left_block">
                            <h3>Окунь</h3>
                            <h2>Кількість:2</h2>
                        </div>
                        <div className="right_block">
                            <h3>Ціна: 400грн</h3>
                        </div>
                    </div>
                    <div className="price_card">
                        <div className="left_block">
                            <h3>Окунь</h3>
                            <h2>Кількість:2</h2>
                        </div>
                        <div className="right_block">
                            <h3>Ціна: 400грн</h3>
                        </div>
                    </div>
                    <div className="price_card">
                        <div className="left_block">
                            <h3>Окунь</h3>
                            <h2>Кількість:2</h2>
                        </div>
                        <div className="right_block">
                            <h3>Ціна: 400грн</h3>
                        </div>
                    </div>
                    
                </div>
                <div className="adderess">
                    <h1>Місто: Коломия</h1>
                    <h1>Відділення №1</h1>
                    <h1>Номер замовника: 098843994</h1>
                    <h1>Лесюк Микола</h1>
                </div>
            </div>
            <button className='Button_Order'>Підтвердити</button>
        </div>
  )
}
export default OrderWindow;