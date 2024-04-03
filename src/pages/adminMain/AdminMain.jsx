import React from 'react'
import ItemBlock from '../../components/itemBlock/ItemBlock'
import './AdminMain.css'
function AdminMain() {
	return (
		<>
			<div className='AdminMainBlock'>
				<div className='AdminMainBtn'>
					<button>Додати товар</button>
					<button>Додати категорію</button>
				</div>
				<div className='ColectionCardAmin'>
					<ItemBlock />
					<ItemBlock />
					<ItemBlock />
					<ItemBlock />

					<ItemBlock />
					<ItemBlock />
					<ItemBlock />
					<ItemBlock />
				</div>
			</div>
		</>
	)
}

export default AdminMain
