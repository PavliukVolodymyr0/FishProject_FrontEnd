import React, { useEffect, useState } from 'react'
import ItemBlock from '../../components/itemBlock/ItemBlock'
import './AdminMain.css'
import AddProduct from '../../components/addProduct/AddProduct'
import CategoryBlock from '../../components/categoryBlock/CategoryBlock'
import AddCategory from '../../components/addCategory/AddCategory'
import axios from 'axios'

function AdminMain() {
	const [clickProduct, setClickProduct] = useState(false)
	const [clickCategory, setClickCategory] = useState(false)
	const [categories, setCategories] = useState([])
	const [products, setProducts] = useState([])

	useEffect(() => {
		axios
			.post('http://127.0.0.1:8000/api/categories')
			.then(response => {
				setCategories(response.data.categories)
				console.log(response.data)
			})
			.catch(error => {
				console.error('Error fetching categories:', error)
			})

		axios
			.post('http://127.0.0.1:8000/api/products')
			.then(response => {
				setProducts(response.data.products)
			})
			.catch(error => {
				console.error('Error fetching products:', error)
			})
	}, [])

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
					<button className='addProduct' onClick={handleAddProductClick}>
						Додати категорію
					</button>
					{clickProduct ? <AddProduct /> : ''}

					<button className='addProduct' onClick={handleAddCategoryClick}>
						Додати товар
					</button>
					{clickCategory ? <AddCategory /> : ''}
				</div>
				<div className='ColectionAdmin'>
					<div className='ColectionProductAdmin'>
						{products.map(product => (
							<ItemBlock key={product.id} product={product} />
						))}
					</div>
					<div className='VerticalLine'></div>
					<div className='ColectionCategoryAdmin'>
						{categories.map(category => (
							<CategoryBlock key={category.id} category={category} />
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default AdminMain
