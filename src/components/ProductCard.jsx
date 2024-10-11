// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';


const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button className="details-btn">View Details</button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductCard;
