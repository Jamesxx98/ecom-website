// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the route parameters
  const [product, setProduct] = useState(null); // State to store product details
  const { addToCart } = useContext(AppContext); // Access cart

  useEffect(() => {
    // Fetch product details when component mounts
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) {
    // Show loading state while fetching product details
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: KES {product.price}</p>

      {/* Add to cart functionality */}
      <button onClick={() => addToCart(product)}>Add to Cart</button>

    </div>
  );
};

export default ProductDetail;
