import React, { Fragment } from 'react'
import {storeProducts} from '../data'
import Card from '../components/Card'
import MobileCarousel from '../components/MobileCarousel'
import Footer from '../components/Footer'

function Mobile() {
    const mobiles = storeProducts.map(mobile => (
        <Card  key={mobile.id} mobile={mobile} />

    ))

    return(
        <Fragment>
            <main className='container'>
                <h1 className='our-products-checkout'>
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
