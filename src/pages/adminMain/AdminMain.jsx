import { useEffect, useState } from 'react'
import ItemBlock from '../../components/itemBlock/ItemBlock'
import './AdminMain.css'
import AddProduct from '../../components/addProduct/AddProduct'
import CategoryBlock from '../../components/categoryBlock/CategoryBlock'
import AddCategory from '../../components/addCategory/AddCategory'
import axios from 'axios'

function AdminMain() {
	const [clickProduct, setClickProduct] = useState(false)
	const [clickCategory, setClickCategory] = useState(false)
	const [selectedType, setSelectedType] = useState('product')
	const [categories, setCategories] = useState([])
	const [products, setProducts] = useState([])

	useEffect(() => {
		axios
			.post('https://fish.api-dev.bmax.com.ua/api/categories')
			.then(response => {
				setCategories(response.data.categories)
				console.log(response.data)
			})
			.catch(error => {
				console.error('Error fetching categories:', error)
			})

		axios
			.post('https://fish.api-dev.bmax.com.ua/api/products')
			.then(response => {
				setProducts(response.data.products)
			})
			.catch(error => {
				console.error('Error fetching products:', error)
			})
	}, [])

	const handleToggleTypeClick = () => {
		setSelectedType(prevType => (prevType === 'product' ? 'category' : 'product'))
	}

	const handleAddProductClick = () => {
		setClickProduct(true)
		setClickCategory(false)
	}

	const handleAddCategoryClick = () => {
		setClickCategory(true)
		setClickProduct(false)
	}

	return (
		<>
			<div className='AdminMainBlock'>
				<div className='AdminMainBtn'>
					<button 
						className={`addProduct123 ${selectedType === 'product' ? 'gradient-right' : 'gradient-left'}`}
						onClick={handleToggleTypeClick}
					>
						Категорії | Товар
					</button>
					
					{selectedType === 'product' && (
						<>
							<button className='addProduct' onClick={handleAddProductClick}>
								Додати категорію
							</button>
							{clickProduct && <AddProduct />}
						</>
					)}

					{selectedType === 'category' && (
						<>
							<button className='addProduct' onClick={handleAddCategoryClick}>
								Додати товар
							</button>
							{clickCategory && <AddCategory />}
						</>
					)}
					<button className='addProduct12'>
						Хіти продажу
					</button>
				</div>
				<div className='ColectionAdmin'>
					{selectedType === 'category' && (
						<div className='ColectionProductAdmin'>
							{products.map(product => (
								<ItemBlock key={product.id} product={product} />
							))}
						</div>
					)}

					{selectedType === 'product' && (
						<div className='ColectionCategoryAdmin'>
							{categories.map(category => (
								<CategoryBlock key={category.id} category={category} />
							))}
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default AdminMain
