import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return(
        <header>
            
            <Link to='/'><h2 className='mobile-header'>
            <i className="ri-smartphone-fill"></i>
                Mobile Store
                </h2>
            </Link>
            <Link to="/cart"><i className='ri-shopping-cart-line ri-fw ri-2x'></i></Link>
        </header>
    )
}

export default Header