import React, { Fragment, useContext } from 'react'
import Footer from '../components/Footer'
import CartItem from '../components/CartItem'

import {Context} from '../Context'

function Cart() {
    const {cartItems} = useContext(Context)
    const CartItemElements = cartItems.map(item => (
        <CartItem key= {item.id} item= {item}/>
    ))

    return(
        <Fragment>
            <main className='checkout-container'>
                <h1 className='our-products-checkout checkout'>
                <i className="ri-smartphone-fill"></i>
                    Check out
                </h1>
               
                {CartItemElements}
                <p className="total-cost">Total: </p>

                <div className='order-button'>
                    <button className='btn'>Place Order</button>
                </div>
            </main>

            <Footer />
        </Fragment>
    )
}

export default Cart