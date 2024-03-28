import './Heading.css'
const Heading = ({ title }) => {
	return (
		<div className='heading'>
			<span className='line'> </span>
			<h1 className='title'>{title}</h1>
			<span className='line'> </span>
		</div>
	)
}

export default Heading
