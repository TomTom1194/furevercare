import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../../index.css";


export default function ImageGallery({ pet }) {
    const images = pet.images || []; // 
    const [mainImage, setMainImage] = useState(pet.mainImage);

    return (
        <div className="container my-4">
            <div className="text-center mb-3">
                <img
                    src={mainImage}
                    alt="main"
                    className="img-fluid rounded shadow"
                    style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
                />
            </div>
            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={3}
                navigation
                className="thumbnail-swiper"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index} onClick={() => setMainImage(img)}>
                        <img
                            src={img}
                            alt={`thumb-${index}`}
                            className={`img-thumbnail rounded ${mainImage === img ? "active-thumb" : ""}`}
                            style={{ cursor: "pointer", height: "120px", objectFit: "cover" }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
