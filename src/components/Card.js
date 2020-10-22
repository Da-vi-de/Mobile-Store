import React, { useContext } from 'react'
import useHover from '../hooks/useHover'

import {Context} from '../Context'

function Card({mobile}) {
    const {cartItems, addToCart, removeFromCart} = useContext(Context)
    const [hovered, ref] = useHover()

    function cartIcon(item) {
        const alreadyInCart = cartItems.includes(item)
        if(alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick = {() => removeFromCart(item.id)}></i>
        } else if(hovered) {
            return <i className="ri-add-circle-line cart"   onClick = {() => addToCart(item)}></i>
        }
    }

    
    return(
            <main className='card' ref={ref}> 
                <img  src= {mobile.img}  alt='Local images not loading' className='mobile-img' />
                <h3 className='mobile-title'>{mobile.title}</h3>
                <p className='mobile-info'>{mobile.info}</p>
                <p className='mobile-price'>{mobile.price} € {cartIcon(mobile)}</p>
                
            </main>
    
    )
   
}


export default Card