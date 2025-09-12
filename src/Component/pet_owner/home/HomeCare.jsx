import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../index.css";

function HomeCare({ db }) {
    return (
        <div className="container my-4">
            <div className="d-flex justify-content-between align-items-center my-4">
                <h2 className="fw-bold">Pet Care</h2>
                <div className="text-center">
                    <Link to="/petowner/petcare">
                        <button className="btn btncss-outline px-4 py-2">
                            More Pets
                        </button>
                    </Link>
                </div>
            </div>


            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={4}
                navigation
                breakpoints={{
                    320: { slidesPerView: 1 },
                    576: { slidesPerView: 3 },
                    992: { slidesPerView: 4 },
                }}
                className="pb-4"
            >
                {db.slice(0, 8).map((pet) => (
                    <SwiperSlide key={pet.id}>
                        <Link to={`/petowner/petcare/${pet.breed}`} style={{ textDecoration: "none" }}>
                            <div className="card cardhover h-100">
                                <img
                                    src={pet.mainImage}
                                    className="card-img-top"
                                    alt={pet.breed}
                                    style={{ height: "200px", objectFit: "contain" }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{pet.breed}</h5>
                                    <p
                                        className="card-text"
                                        style={{
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            minHeight: "3rem"
                                        }}
                                    >
                                        {pet.training_tips}
                                    </p>
                                    <button className="btn btncss mt-auto">View Details</button>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default HomeCare;
