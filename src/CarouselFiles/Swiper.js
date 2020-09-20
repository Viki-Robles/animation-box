import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";
import './Swiper.css';
import DragScrollProvider from 'drag-scroll-provider';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];


export default function SwiperSlides() {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Our Customers</h1>
            <div className="App">
                <Carousel breakPoints={breakPoints}>
                    <Item className='swiper-cards'>
                        <div>
                            <h4>
                                We have seen amazing results already. It really saves me time and effort.
                                HelloHub is exactly what
                                our business has been lacking. Thanks guys, keep up the good work!
                            </h4>
                            <h2>Ambrose</h2>
                        </div>
                    </Item>
                    <Item>Two</Item>
                    <Item>Three</Item>
                    <Item>Four</Item>
                    <Item>Five</Item>
                    <Item>Six</Item>
                </Carousel>
            </div>
        </>
    );
}