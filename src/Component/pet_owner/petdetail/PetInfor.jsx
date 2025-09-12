

function PetInfor({ pet }) {

    return (
        <div className="container my-4">
            <div className="card shadow-sm border-0 rounded-3 p-3" style={{ maxWidth: "500px", margin: "0 auto" }}>
                <div className="card-body">
                    <h3 className="card-title text-brown fw-bold text-capitalize">
                        {pet.breed}
                    </h3>
                    <hr />
                    <p><strong>Species:</strong> {pet.species}</p>
                    <p><strong>Vaccine Status:</strong> {pet.vaccine}</p>
                    <p><strong>Training Tips:</strong> {pet.training_tips}</p>

                </div>
            </div>
        </div >
    );
}

export default PetInfor;
