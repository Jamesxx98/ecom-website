// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';

const CategoryPage = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

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
    </div>
  );
};

export default CategoryPage;
