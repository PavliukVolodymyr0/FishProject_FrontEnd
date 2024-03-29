import BasicDemo from '../../components/carousel/BasicDemo'
import ItemBlock from '../../components/itemBlock/ItemBlock'
import { Link } from 'react-router-dom'
import './Main.css'
import Heading from '../../components/heading/Heading'
import CategoryBlock from '../../components/categoryBlock/CategoryBlock'
import { category } from '../../constants'

function Main() {
	return (
		<>
			<div className='AutoSlider'>
				<BasicDemo />
			</div>
			<Heading title='Xіт продаж' />
			<div className='ColectionCard'>
				<ItemBlock />
				<ItemBlock />
				<ItemBlock />
			</div>
			<Heading title='Категорії' />
			<div className='Category'>
				{category.map(item => (
					<div className='CategoryCard' key={item.id}>
						<CategoryBlock title={item.title} imgUrl={item.imgUrl} />
					</div>
				))}
				<><br></br></>
				<Link to='/category'>
					<div className='btn'>Всі категорії</div>
				</Link>
			</div>
		</>
	)
}

export default Main
