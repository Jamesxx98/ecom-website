// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to = {`/productdetail/${product.id}`}>
      <img src={product.image} alt={product.title} className="product-image" />
      <h3>{product.title}</h3>
      <p>KES {product.price}</p>
      <button className="details-btn">View Details</button>
      </Link>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductCard;
