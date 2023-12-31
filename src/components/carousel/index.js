import Head from 'next/head';
import React, { Component } from "react";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
        };
        return (
            <div
            >
                <Head>
                    <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                </Head>
                <Slider {...settings}>
                    <div className="sliderr">
                        {/* <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." /> */}
                        <img src="https://e1.pxfuel.com/desktop-wallpaper/331/95/desktop-wallpaper-genshin-impact-screenshot-by-%E6%9C%AA%E6%9D%A5%E6%B8%B8%E6%88%8F%E7%A0%94%E7%A9%B6%E6%89%80-genshin-impact-2020.jpg" alt="..." />
                    </div>
                    <div className="sliderr">
                        {/* <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." /> */}
                        <img src="https://c4.wallpaperflare.com/wallpaper/302/910/554/illustration-women-landscape-mountains-wallpaper-preview.jpg" alt="..." />
                    </div>
                    <div className="sliderr">
                        {/* <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." /> */}
                        <img src="https://wallpaperaccess.com/full/952285.jpg" alt="..." />
                    </div>
                    <div className="sliderr">
                        {/* <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." /> */}
                        <img src="https://cutewallpaper.org/21/dawn-background/Steam-Community-Market-Listings-for-383870-Firewatch-.jpg" alt="..." />
                    </div>
                    <div className="sliderr">
                        {/* <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." /> */}
                        <img src="https://www.pixelstalk.net/wp-content/uploads/images6/Minimalist-Wallpaper-4K-HD-Free-download.jpg" alt="..." />
                    </div>
                </Slider >
            </div>
        );
    }
}