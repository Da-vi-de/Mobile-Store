import React from 'react'

function cartItem({item}) {
    return(
        <div className='cart-item'>
            <i className="ri-delete-bin-line"></i>
            <img src={item.img} alt='Mobile phones in cart' className='mobile-cart'></img>
            <p className='mobile-cart-price'>€ {item.price}</p>
        </div>
    )
}


/* */
export default cartItem