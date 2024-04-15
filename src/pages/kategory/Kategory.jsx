import ItemBlock from '../../components/itemBlock/ItemBlock';
import './Kategory.css'

function Kategory() {

    return (
        <>
        <div className="kategory">
            <h1>Жива риба</h1>
            <div className="flex_kategory">
                <div className="button_kategory">
                    <button>Жива риба</button>
                    <button>Жива риба</button>
                    <button>Жива риба</button>
                    <button>Жива риба</button>
                    <button>Жива риба</button>
                    <button>Жива риба</button>
                </div>
                <div className="fish_cart_kategory">
                    <ItemBlock />
                    <ItemBlock />
                    <ItemBlock />
                    <ItemBlock />
                    <ItemBlock />
                    <ItemBlock />
                    <ItemBlock />
                    <ItemBlock />
                    <ItemBlock />
                    <ItemBlock />
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
        </div>
        </>
    )
}

export default Kategory;