import React from 'react'
import {storeProducts} from '../data'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

function MobileCarousel() {
    const photos = storeProducts.map(photo => (
        <div key={photo.id} className= 'carousel-container'>
            <img src={photo.img} alt='Photos slideshow' />
        </div>
    ))

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }

    return(
        <Slider {...settings}>
            {photos}
        </Slider>
        
    )
}

export default MobileCarousel