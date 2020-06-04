import React, {useState, useContext} from 'react'
import {Context}from '../Context'

function CartItem({item}) {
    const {removeFromCart} = useContext(Context)
    const [hovered, setHovered] = useState(false)

    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return(
        <div className='cart-item'>
            <i 
                className={iconClassName}
                onClick = {() => removeFromCart(item.id)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
            </i>

            <img src={item.img} alt='Mobile phones in cart' className='mobile-cart'></img>
            <p className='mobile-cart-price'>{item.price} €</p>
        </div>
    )
}


export default CartItem