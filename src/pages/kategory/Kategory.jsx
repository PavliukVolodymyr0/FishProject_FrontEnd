import { useState, useEffect } from 'react';
import ItemBlock from '../../components/itemBlock/ItemBlock';
import axios from 'axios';
import './Kategory.css'

function Kategory() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Категорії");

    useEffect(() => {
        axios.post('http://127.0.0.1:8000/api/categories')
            .then(response => {
                console.log(response.data);
                const categoriesData = response.data.categories; 
                setCategories(categoriesData); 
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    const handleCategoryClick = (categoryId, categoryName) => {
        axios.post('http://127.0.0.1:8000/api/products', { category_id: categoryId })
            .then(response => {
                console.log(response.data);
                setProducts(response.data.products);
                setSelectedCategory(categoryName); 
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    };

    return (
        <div className="kategory">
            <h1>{selectedCategory}</h1>
            <div className="flex_kategory">
                <div className="button_kategory">
                    {categories.map(category => (
                        <button key={category.id} onClick={() => handleCategoryClick(category.id, category.name)}>{category.name}</button>
                    ))}
                </div>
                <div className="fish_cart_kategory">
                    {products.map(product => (
                        <ItemBlock key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Kategory;