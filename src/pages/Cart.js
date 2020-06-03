import React, { Fragment, useContext, useState } from 'react'
import Footer from '../components/Footer'
import CartItem from '../components/CartItem'

import {Context} from '../Context'

function Cart() {
    const {cartItems, emptyCart} = useContext(Context)
    const [buttonText, setButtonText] = useState('Place Order')
   
    const cartItemElements = cartItems.map(item => (
        <CartItem key= {item.id} item= {item} />
    ))

    const totalCost =  cartItems.reduce((accumulator, item) =>{
        return accumulator + item.price
    }, 0)

    const totalCostDisplay = totalCost.toLocaleString('it-IT', {style: "currency", currency: "EUR"})

   function placeOrder() {
        setButtonText('Ordering...')
        setTimeout(() => {
            setButtonText('Place Order')
            emptyCart()
        }, 3000)
         
   }

    return(
        <Fragment>
            <main className='checkout-container'>
                <h1 className='our-products-checkout checkout'>
                <i className="ri-smartphone-fill"></i>
                    Check out
                </h1>
               
                {cartItemElements}
                <p className="total-cost">Total: {totalCostDisplay}</p>
                <div className='order-button'>
                    <button className='btn' onClick={() => {placeOrder()}}>{buttonText}</button>
                </div> 
            </main>

            <Footer />
        </Fragment>
    )
}

export default Cart