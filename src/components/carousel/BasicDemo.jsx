import Carousel from 'nuka-carousel'

import CarouselImgs from '../../assets/images/AutoSlider1.png'
import CarouselImgs1 from '../../assets/images/AutoSlider2.png'
import CarouselImgs2 from '../../assets/images/AutoSlider3.png'

const BasicDemo = ({ wrapAround = true, autoplay = true, startIndex = 0 }) => {
	return (
		<Carousel
			className='carousel'
			slideIndex={startIndex}
			wrapAround={wrapAround}
			autoplay={autoplay}
			autoplayInterval={6000}
			speed={2000}
			renderCenterLeftControls={() => null}
			renderCenterRightControls={() => null}
		>
			<img
				className='carousel_img'
				src={CarouselImgs}
				width='1800px'
				height='700px'
				alt=''
			/>
			<img
				className='carousel_img'
				src={CarouselImgs1}
				width='1800px'
				height='700px'
				alt=''
			/>
			<img
				className='carousel_img'
				src={CarouselImgs2}
				width='1800px'
				height='700px'
				alt=''
			/>
			<img
				className='carousel_img'
				src={CarouselImgs}
				width='1800px'
				height='700px'
				alt=''
			/>
			<img
				className='carousel_img'
				src={CarouselImgs1}
				width='1800px'
				height='700px'
				alt=''
			/>
		</Carousel>
	)
}

export default BasicDemo
