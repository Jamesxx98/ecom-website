import React from 'react';
import ProductCard from './ProductCard';
import PropTypes from 'prop-types';


const ProductList = ({ products }) => {
  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductList;
