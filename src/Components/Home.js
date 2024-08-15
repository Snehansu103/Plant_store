import React from 'react'
import FeaturedProduct from './FeaturedProduct';
import './Home.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Home() {
    const user = useSelector(state => state.loggedUser)
  return (
    <>
        <div className='home-top'>
            <div className='nav-bar'>
                <div>
                    <Link to={'/home'}><p>B.planet</p></Link>
                </div>
                <div className='sub-bar'>
                    <div className='contact-btn'>
                        <Link  to={'/contactus'}>Contact Us</Link>
                    </div>
                    <Link to={'/profile'}>                    
                        <div className='profile'>                    
                            <img src={process.env.PUBLIC_URL + user.url} alt='user'/>                        
                        </div>
                    </Link>
                </div>               
            </div>
            <div className='banner'>
                <p>'As interesting <br />as a plant'</p>
                <img src={process.env.PUBLIC_URL +'/Assets/Banner1.png'} />
                <img src={process.env.PUBLIC_URL +'/Assets/Banner2.png'} />
            </div>
        </div>
        <FeaturedProduct />
    </>
  )
}

export default Home
