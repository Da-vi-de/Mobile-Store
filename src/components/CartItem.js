import React, {useContext} from 'react'
import {Context}from '../Context'
import useHover from '../hooks/useHover'

function CartItem({item}) {
    const {removeFromCart} = useContext(Context)
    const [hovered, ref] = useHover()

    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return(
        <div className='cart-item'>
            <i 
                className={iconClassName}
                onClick = {() => removeFromCart(item.id)}
                ref={ref}
            >
            </i>

            <img src={item.img} alt='Mobile phones in cart' className='mobile-cart'></img>
            <p className='mobile-cart-price'>{item.price} €</p>
        </div>
    )
}


export default CartItem