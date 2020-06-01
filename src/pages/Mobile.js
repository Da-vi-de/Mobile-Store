import React, { Fragment, useState, useContext } from 'react'
import data from '../data'
import MobileCarousel from '../components/MobileCarousel'
import Footer from '../components/Footer'

import {Context} from '../Context'

function Mobile() {
    const [hovered, setHovered] = useState(false)
    const {cartItems, addToCart, removeFromCart} = useContext(Context)

    const mobiles = data.map(mobile => (
        <div className='card' key={mobile.id}
             onMouseEnter = {() => setHovered(true)}
             onMouseLeave = {() => setHovered(false)}
            
        >
               
                <img src= {mobile.img}  alt='Mobile phones' className='mobile-img' />
                <h3 className='mobile-title'>{mobile.title}</h3>
                <p className='mobile-info'>{mobile.info}</p>
                <p className='mobile-price'>€ {mobile.price} {cartIcon(mobile)}</p>
        </div>
    
    ))
    
function cartIcon(item) {
    const alreadyInCart = cartItems.includes(item)
    if(alreadyInCart) {
        return <i className="ri-shopping-cart-fill cart" onClick = {() => removeFromCart(item.id)}></i>
    } else if(hovered) {
        return <i className="ri-add-circle-line cart"   onClick = {() => addToCart(item)}></i>
    }
}

    return(
        <Fragment>
            <main className='container'> 
                <h1 className='products'>
                    <i className="ri-smartphone-fill"></i>
                    Our Products
                </h1>

                <MobileCarousel />
            
                {mobiles}
                
            </main>

            <Footer />
        </Fragment>
    )
}

export default Mobile
