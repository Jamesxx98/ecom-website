import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  return (
    <div>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product) => <ProductItem key={product.id} product={product} />)
      )}
    </div>
  );
};

export default ProductList;
