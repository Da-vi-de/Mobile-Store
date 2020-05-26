import React from 'react'
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
        <main className='container'> 
            <h1 className='products'>
                <i class="ri-smartphone-fill"></i>
                Our Products
            </h1>
            <MobileCarousel />
            {mobiles}
        </main>
    )
}

export default Mobile