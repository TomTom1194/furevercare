import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../../index.css";

export default function ImageProduct({ product }) {
    // Gộp ảnh chính + danh sách ảnh
    const initialImages = [product.mainImage, ...(product.images || [])];
    const [mainImage, setMainImage] = useState(initialImages[0]);
    const [thumbnails, setThumbnails] = useState(initialImages.slice(1));

    const handleThumbClick = (img) => {
        // Hoán đổi ảnh chính với thumbnail được click
        setThumbnails((prev) => {
            const newThumbs = prev.filter((t) => t !== img);
            newThumbs.push(mainImage); // mainImage cũ xuống thumbnails
            return newThumbs;
        });
        setMainImage(img);
    };

    return (
        <div className="container my-4">
            <div className="text-center mb-3">
                <img
                    src={mainImage}
                    alt="main"
                    className="img-fluid rounded"
                    style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
            </div>

            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={3}
                navigation
                className="thumbnail-swiper"
            >
                {thumbnails.map((img, index) => (
                    <SwiperSlide key={index} onClick={() => handleThumbClick(img)}>
                        <img
                            src={img}
                            alt={`thumb-${index}`}
                            className={`img-thumbnail rounded ${mainImage === img ? "active-thumb" : ""
                                }`}
                            style={{
                                cursor: "pointer",
                                height: "120px",
                                objectFit: "cover",
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
