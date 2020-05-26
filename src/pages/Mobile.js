import React from 'react'
import data from '../data'


function Mobile() {
    const mobiles = data.map(info => (
            <div className='card' key={info.id}>
                <img src= {info.img} className='mobile-img' alt='Mobile phones' />
                <h3 className='mobile-title'>{info.title}</h3>
                <p className='mobile-info'>{info.info}</p>
                <p className='mobile-price'>€ {info.price}</p>
            </div>         
    ))

    return(
        <main className='container'> 
            <h1 className='products'>Our Products</h1>
            {mobiles}
        </main>
    )
}

export default Mobile