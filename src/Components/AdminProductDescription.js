import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import './AdminProductDescription.css';
import { Link } from 'react-router-dom';
import { updateProduct } from '../ReduxStore/actions';

function AdminProductDescription() {
  const { id } = useParams();
  const product = useSelector(state => state.products.find(p => p.id === parseInt(id)));
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const [title, setTitle] = useState(product.header.title);
  const [subTitle, setSubTitle] = useState(product.header.subTitle);
  const [water, setWater] = useState(product.guide.water);
  const [light, setLight] = useState(product.guide.light);
  const [tips, setTips] = useState(product.guide.tips);
  const [description, setDescription] = useState(product.description);

  const onSubmit = () => {
    const newArr = products.map( (el) => el.id === product.id ? product : el )
    dispatch(updateProduct(newArr));
    console.log("Update Dispatched");
  }
  console.log(process.env.PUBLIC_URL);

  return (
    <>
      <div className='nav-bar' style={{ margin: '40px 40px 40px 150px', marginLeft: '40px' }}>
        <div style={{ width: '90%', textAlign: 'center' }}>
          <Link to={'/home'}><p>B.planet</p></Link>
        </div>
        <div className='contact-btn'>
          <Link to={'/contactus'}>Contact Us</Link>
        </div>
      </div>
      <div className='prod-desc-contr'>
        <div className='product-text'>
          <input type='text' value={title} onChange={(e) => {
            setTitle(e.target.value);
            product.header.title = title;
          }}></input> <br />
          <input type='text' value={subTitle} onChange={(e) => {
            setSubTitle(e.target.value);
            product.header.subtitle = subTitle;
          }} style={{width:'590px'}}></input>
          <h1>Plant Care Guide</h1>
          <span></span>
          <div className='guide'>
            <p>Water</p>
            <input type='text' value={water} onChange={(e) => {
            setWater(e.target.value);
            product.header.water = water;
          }} style={{width:'500px'}}></input>
          </div>
          <span></span>
          <div className='guide'>
            <p>Light</p>
            <input type='text' value={light} onChange={(e) => {
            setLight(e.target.value);
            product.header.light = light;
          }} style={{width:'500px'}}></input>
          </div>
          <span></span>
          <div className='guide'>
            <p>Tips</p>
            <input type='text' value={tips} onChange={(e) => {
            setTips(e.target.value);
            product.header.tips = tips;
          }} style={{width:'500px'}}></input>            
          </div>
          <h1>Description</h1>
          <span></span>
          <textarea type='text' value={description} onChange={(e) => {
            setDescription(e.target.value);
            product.header.description = description;
          }} rows="4" cols="78"></textarea>
          <button onClick={onSubmit}>Submit</button>
        </div>
        <div className='product-img'>
          <img src={process.env.PUBLIC_URL +  product.url} alt={product.name} />
        </div>
      </div>
    </>
  )
}

export default AdminProductDescription
