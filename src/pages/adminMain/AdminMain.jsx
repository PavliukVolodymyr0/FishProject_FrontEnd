import React from 'react'
import ItemBlock from '../../components/itemBlock/ItemBlock'
import './AdminMain.css'
import AddProduct from '../../components/addProduct/AddProduct'
import CategoryBlock from '../../components/categoryBlock/CategoryBlock'
import AddCategory from '../../components/addCategory/AddCategory'
function AdminMain() {
	const [clickProduct, setClickProduct] = React.useState(false)
	const [clickCategory, setClickCategory] = React.useState(false)
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
						Додати товар
					</button>
					{clickProduct ? <AddProduct /> : ''}

					<button className='addProduct' onClick={handleAddCategoryClick}>
						Додати категорію
					</button>
					{clickCategory ? <AddCategory /> : ''}
				</div>
				<div className='ColectionAdmin'>
					<div className='ColectionProductAdmin'>
						<ItemBlock />
						<ItemBlock />
						<ItemBlock />
						<ItemBlock />
						
					</div>
					<div className='VerticalLine'></div>
					<div className='ColectionCategoryAdmin'>
						<CategoryBlock />
						<CategoryBlock />
						<CategoryBlock />
						<CategoryBlock />
					</div>
				</div>
			</div>
		</>
	)
}

export default AdminMain
