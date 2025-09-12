

function GroomingVideo({ pet }) {

    return (
        <div className="my-4 grooming">
            <h2 className="text-center mb-3 text-brown fw-bold">
                Grooming Video
            </h2>
            <div className="d-flex justify-content-center">
                <div className="ratio ratio-16x9" style={{ maxWidth: "720px", width: "100%" }}>
                    <iframe
                        src={pet.grooming_video}
                        title={`${pet.breed} Grooming Video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default GroomingVideo;
