import React, { Fragment } from 'react'
import data from '../data'
import MobileCarousel from '../components/MobileCarousel'


function Mobile() {
    const mobiles = data.map(mobile => (
            <div className='card' key={mobile.id}>
                <img src= {mobile.img}  alt='Mobile phones' className='mobile-img' />
                <h3 className='mobile-title'>{mobile.title}</h3>
                <p className='mobile-info'>{mobile.info}</p>
                <p className='mobile-price'>€ {mobile.price}</p>
            </div>         
    ))

    return(
        <Fragment>
            <main className='container'> 
                <h1 className='products'>
                    <i class="ri-smartphone-fill"></i>
                    Our Products
                </h1>

                <MobileCarousel />

                {mobiles}
            </main>

            <footer className='footer'>
                <div className='footer-media'>
                    <p>follow us</p>
                    <i class="ri-facebook-circle-fill"></i>
                    <i class="ri-instagram-fill"></i>
                    <i class="ri-twitter-fill"></i>
                </div>
                <div className='footer-rights'>
                    <p>Mobile Store</p>
                    <p><i class="ri-copyright-fill"></i>Copyright 2020. All rights reserved.</p>
                    <p>Powered by Davide.</p>
                </div>
           </footer>
     </Fragment>
    )
}

export default Mobile