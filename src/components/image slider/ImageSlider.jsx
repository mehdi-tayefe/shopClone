"use client";
import image1 from "../../assets/slider/Imgslider1.png"
import image2 from "../../assets/slider/Imgslider2.png"
import image3 from "../../assets/slider/Imgslider3.png"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {  Pagination, Autoplay } from "swiper/modules";

const images = [
    image1, image2, image3
];

export default function ImageSlider() {
    return (
        <div className="w-full h-160 px-10 mt-5">
            <div className="w-full h-full">
                <Swiper
                    modules={[ Pagination, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    className="rounded-lg shadow-lg"
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={src}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-150 object-cover rounded-lg"
                            />
                            <div className="absolute left-35 bottom-2/5 -translate-x-1/2 bg-black/0  flex-col items-center justify-center">
                                <h2 className="text-white text-2xl font-bold">Gold Big Hoops</h2>
                                <p className="text-white text-xl font-bold mt-3">66$</p>
                                <button className="w-48 h-12  border-2 border-white text-xl text-white text-center mt-10 cursor-pointer rounded-2xl">view product</button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
