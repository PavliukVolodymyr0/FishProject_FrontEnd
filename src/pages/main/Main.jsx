import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BasicDemo from '../../components/carousel/BasicDemo'
import ItemBlock from '../../components/itemBlock/ItemBlock'
import { Link } from 'react-router-dom'
import './Main.css'
import Heading from '../../components/heading/Heading'
import CategoryBlock from '../../components/categoryBlock/CategoryBlock'

function Main() {
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
				console.log(response.data)
			})
			.catch(error => {
				console.error('Error fetching products:', error)
			})
	}, [])

	return (
		<>
			<div className='AutoSlider'>
				<BasicDemo />
			</div>
			<Heading title='Xіт продаж' />
			<div className='ColectionCard'>
				{products.map(product => (
					<ItemBlock key={product.id} product={product} />
				))}
			</div>
			<Heading title='Категорії' />
			<div className='Category'>
				{categories.map(category => (
					<CategoryBlock key={category.id} category={category} />
				))}
				<br />
				<Link to='/kategory'>
					<div className='btn'>Всі категорії</div>
				</Link>
			</div>
		</>
	)
}

export default Main
