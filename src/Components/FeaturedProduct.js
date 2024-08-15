import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './FeaturedProduct.css';

const FeaturedProduct = () => {
  const products = useSelector(state => state.products);
  const navigate = useNavigate();

  console.log(products);

  const handleProductClick = (productId) => {
    navigate (`/product/${productId}`);
  };
 /* key={product.id}*/

  return (
    <div className="product-list-container">
      <h1>Featured Product</h1>
      <div className='product-div'>
        {products.map(product => (
          <div className='product-card' onClick={() => handleProductClick(product.id)}>
            <img src={product.url} alt={product.name} />
            <h4>{product.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
