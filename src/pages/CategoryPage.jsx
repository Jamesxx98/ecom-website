import  { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext'; 
import ProductList from '../components/ProductList';

const CategoryPage = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(AppContext); // Access the addToCart function

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${name}`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching category products:', error));
  }, [name]);

  return (
    <div>
      <h1>Category: {name}</h1>
      <ProductList products={products} />
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default CategoryPage;
