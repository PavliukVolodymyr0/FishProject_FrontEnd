import './HitSale.css'
import { useState } from 'react'
import axios from 'axios'
import Close from '../../assets/images/x.png'
import ItemBlock from '../itemBlock/ItemBlock'

const HitSale = ({ products }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [selectedProductIds, setSelectedProductIds] = useState([])

  const handleCloseClick = () => {
    setIsVisible(false)
  }

  const handleItemClick = (productId) => {
    setSelectedProductIds(prevSelected => {
      if (prevSelected.includes(productId)) {
        return prevSelected.filter(id => id !== productId)
      } else if (prevSelected.length < 3) {
        return [...prevSelected, productId]
      } else {
        return prevSelected
      }
    })
  }

  const handleConfirmClick = async () => {
    if (selectedProductIds.length === 3) {
      try {
        const response = await axios.post('https://fish.api-dev.bmax.com.ua/api/admin/updatetop', {
          product_ids: selectedProductIds
        })
        console.log(response.data.message)
        // Додатковий код у випадку успішної відправки можна додати тут
      } catch (error) {
        console.error('Error:', error)
        // Обробка помилок
      }
    } else {
      alert('Будь ласка, виберіть 3 продукти.')
    }
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="hit_sale">
      <div className="close_h1">
        <h1>Виберіть товар</h1>
        <img src={Close} alt="Закрити" onClick={handleCloseClick} style={{ cursor: 'pointer' }} />
      </div>
      <div className="main">
        {products.map(product => (
          <ItemBlock
            key={product.id}
            product={product}
            onClick={() => handleItemClick(product.id)}
            isSelected={selectedProductIds.includes(product.id)}
          />
        ))}
      </div>
      <div className="button_hit">
        <button onClick={handleConfirmClick}>
          Підтвердити
        </button>
      </div>
    </div>
  )
}

export default HitSale