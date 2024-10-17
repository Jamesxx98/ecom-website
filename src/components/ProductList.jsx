// eslint-disable-next-line no-unused-vars
import React from 'react';
import ProductCard from './ProductCard';
import PropTypes from 'prop-types';

const ProductList = ({ products, addToCart }) => {
  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductList;