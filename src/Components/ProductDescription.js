import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './ProductDescription.css';
import { Link } from 'react-router-dom';

const ProductDescription = () => {
  const { id } = useParams();
  const product = useSelector(state => state.products.find(p => p.id === parseInt(id)));

  return (
    <>
      <div className='nav-bar' style={{ margin: '40px 40px 40px 150px', marginLeft: '40px' }}>
        <div style={{width:'90%', textAlign:'center'}}>
          <Link to={'/home'}><p>B.planet</p></Link>
        </div>
        <div className='contact-btn'>
          <Link to={'/contactus'}>Contact Us</Link>
        </div>
      </div>
      <div className="product-description-container">
        <div className='product-text'>
          <h1>{product.header.title}</h1>
          <p>{product.header.subTitle}</p>
          <h1>Plant Care Guide</h1>
          <span></span>
          <div className='guide'>
            <p>Water</p>
            <p>{product.guide.water}</p>
          </div>
          <span></span>
          <div className='guide'>
            <p>Light</p>
            <p>{product.guide.light}</p>
          </div>
          <span></span>
          <div className='guide'>
            <p>Tips</p>
            <p>{product.guide.tips}</p>
          </div>
          <h1>Description</h1>
          <span></span>
          <p>{product.description}</p>
        </div>
        <div className='product-img'>
          <img src={ '.' + product.url} alt={product.name}/>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
