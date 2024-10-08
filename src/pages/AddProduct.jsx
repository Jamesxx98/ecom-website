import React, { useState } from 'react';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleAddProduct = (e) => {
    e.preventDefault();
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      body: JSON.stringify({
        title,
        price,
        description,
      }),
    }).then((res) => res.json())
      .then((data) => alert('Product added!'));
  };

  return (
    <form onSubmit={handleAddProduct}>
      <input type="text" placeholder="Product Title" onChange={(e) => setTitle(e.target.value)} />
      <input type="number" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
      <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
