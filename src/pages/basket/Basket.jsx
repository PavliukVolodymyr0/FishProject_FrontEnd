import BasketComponent from '../../components/basketComponent/BasketComponent';
import './Basket.css'



function Basket() {

    return (
        <>
        <div className="block1">
            <BasketComponent/>
            <BasketComponent/>
            <BasketComponent/>
        </div>
        <div className="button_basket">
            <div className="price_basket">
                <h1>Сума: 2000грн</h1>
            </div>
            <button className='basket_bt'>Замовити</button>
        </div>
        </>
    )
}

export default Basket;