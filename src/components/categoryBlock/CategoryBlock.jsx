import React from 'react'
import './CategoryBlock.css'

const CategoryBlock = ({ category }) => {
	if (!category) {
		return <div className='DisplayCategory'>Category not found</div>
	}

	return (
		<div className='DisplayCategory'>
			<h1>{category.name}</h1>
			<div>
				<img
					className='imgCard'
					src={`https://fish.api-dev.bmax.com.ua/storage/${category.photo}`}
					alt={category.name}
				/>
			</div>
		</div>
	)
}

export default CategoryBlock
