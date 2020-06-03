import React, {useState, useContext} from 'react'
import {Context}from '../Context'

function CartItem({item}) {
    const {removeFromCart} = useContext(Context)
    
    return(
        <div className='cart-item'>
            <i className="ri-delete-bin-line" onClick = {() => removeFromCart(item.id)}></i>
            <img src={item.img} alt='Mobile phones in cart' className='mobile-cart'></img>
            <p className='mobile-cart-price'>{item.price} €</p>
        </div>
    )
}


export default CartItem