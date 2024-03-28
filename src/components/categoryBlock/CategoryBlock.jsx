import './CategoryBlock.css'

const CategoryBlock = ({ title, imgUrl }) => {
	return (
		
			<div className='DisplayCategory'>
				<h1>{title}</h1>
				<div>
					<img src={imgUrl} />
				</div>
			</div>
		
	)
}

export default CategoryBlock
