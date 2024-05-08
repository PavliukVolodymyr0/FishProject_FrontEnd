import React from 'react';
import './ItemBlock.css';
import BuyIcon from '../../assets/svg/BuyIcon.jsx';

function ItemBlock({ product }) {
    const handleBuyClick = () => {
        const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        console.log(existingCartItems);
        // Пе ревірка наявності товару у корзині
        const isProductInCart = existingCartItems.some(item => item.id === product.id);

        if (!isProductInCart) {
            // Якщо товару немає у корзині, додати його разом з айді
            const updatedCartItems = [...existingCartItems, { id: product.id, ...product, quantity: 1 }];
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        } else {
            // Якщо товар вже є у корзині, ви можете показати повідомлення або виконати інші дії
            alert('Цей товар вже є у вашій корзині');
        }
    };

    return (
        <div className='Display'>
            <img className='imgCard' src={product.photo} alt={product.name} />
            <div>
                <h1 className='NameProduct'>{product.name}</h1>
                <div className='InfoProduct'>
                    <div className='Price'>
                        <p>{product.price} грн</p>
                    </div>
                    <div className='Buy' onClick={handleBuyClick}>
                        <BuyIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemBlock;