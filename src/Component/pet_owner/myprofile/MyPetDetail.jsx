import { useParams } from "react-router-dom";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import pets from "../../../Data/Petowner/pet.json";

function MyPetDetail() {
    const { id } = useParams();
    const pet = pets.find((p) => p.id === id);

    // 🔥 Hook phải luôn được gọi, nên check null an toàn trước
    const initialImages = pet
        ? [pet.mainImage, ...(pet.images || [])]
        : [];
    const [mainImage, setMainImage] = useState(initialImages[0]);
    const [thumbnails, setThumbnails] = useState(initialImages.slice(1));

    if (!pet) {
        return (
            <div className="container mt-5">
                <h3>Pet not found</h3>
            </div>
        );
    }

    const handleThumbClick = (img) => {
        setThumbnails((prev) => {
            const newThumbs = prev.filter((t) => t !== img);
            newThumbs.push(mainImage);
            return newThumbs;
        });
        setMainImage(img);
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Pet Detail</h2>
            <div className="row">
                {/* Left column: Images */}
                <div className="col-md-6">
                    <div className="card shadow-sm mb-4">
                        <div className="text-center">
                            <img
                                src={mainImage}
                                alt={pet.name}
                                className="img-fluid rounded"
                                style={{ height: "300px", objectFit: "contain" }}
                            />
                        </div>
                        <div className="card-body">
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={10}
                                slidesPerView={3}
                                navigation
                                className="thumbnail-swiper"
                            >
                                {thumbnails.map((img, idx) => (
                                    <SwiperSlide
                                        key={idx}
                                        onClick={() => handleThumbClick(img)}
                                    >
                                        <img
                                            src={img}
                                            alt={`pet-${idx}`}
                                            style={{
                                                cursor: "pointer",
                                                width: "100%",
                                                height: "120px",
                                                objectFit: "cover",
                                                borderRadius: "8px",
                                                border:
                                                    mainImage === img
                                                        ? "3px solid #dc143c"
                                                        : "1px solid #ccc",
                                            }}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>

                {/* Right column: Info */}
                <div className="col-md-6">
                    <div className="card shadow-sm mb-4">
                        <div className="card-body">
                            <h4>{pet.name}</h4>
                            <p>
                                <strong>Species:</strong> {pet.spieces}
                            </p>
                            <p>
                                <strong>Breed:</strong> {pet.breed}
                            </p>
                            <p>
                                <strong>Age:</strong> {pet.age} years
                            </p>
                            <p>
                                <strong>Weight:</strong> {pet.weight}
                            </p>
                            <p>
                                <strong>Vaccine Status:</strong>{" "}
                                {pet.vaccine_status}
                            </p>
                            <p>
                                <strong>Notes:</strong> {pet.notes}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Medical History */}
            <div className="mt-4">
                <h3>Medical History</h3>
                {pet.medicalHistory && pet.medicalHistory.length > 0 ? (
                    <ul className="list-group">
                        {pet.medicalHistory.map((mh, idx) => (
                            <li key={idx} className="list-group-item">
                                <strong>Date:</strong> {mh.date} <br />
                                <strong>Vet:</strong> {mh.vet} <br />
                                <strong>Reason:</strong> {mh.reason} <br />
                                <strong>Diagnosis:</strong> {mh.diagnosis} <br />
                                <strong>Treatment:</strong> {mh.treatment}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No medical history available.</p>
                )}
            </div>

            {/* Appointments */}
            <div className="mt-4">
                <h3>Upcoming Appointments</h3>
                {pet.appointments && pet.appointments.length > 0 ? (
                    <ul className="list-group">
                        {pet.appointments.map((appt, idx) => (
                            <li key={idx} className="list-group-item">
                                <strong>Date:</strong> {appt.date} <br />
                                <strong>Time:</strong> {appt.time} <br />
                                <strong>Vet:</strong> {appt.vet} <br />
                                <strong>Status:</strong> {appt.status}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No upcoming appointments.</p>
                )}
            </div>
        </div>
    );
}

export default MyPetDetail;
