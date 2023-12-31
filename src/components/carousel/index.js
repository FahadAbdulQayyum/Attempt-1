import axios from 'axios';
import Head from 'next/head';
import React, { Component, useEffect, useState } from "react";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SimpleSlider() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchImg = async () => {
            const { data } = await axios.get('/api/products')
            console.log('productsa', data.products)
            setProducts(data.products)
        }
        fetchImg()
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <div>
            <Head>
                <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>
            <Slider {...settings}>
                {products.map(p => <div className='sliderr'><img src={p.imgUrl} /></div>)}
            </Slider>
        </div>
    );
}