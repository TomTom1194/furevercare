import { useParams } from "react-router-dom";
import ImageGallery from "../../Component/pet_owner/petdetail/ImageGallary";
import PetInfor from "../../Component/pet_owner/petdetail/PetInfor";
import GroomingVideo from "../../Component/pet_owner/petdetail/GroomingVideo";
import HealthyTips from "../../Component/pet_owner/petdetail/HealthyTips";
import Feeding from "../../Component/pet_owner/petdetail/Feeding";

function PetDetail({ db }) {
    const { breed } = useParams();
    const detailpet = db.find((pet) => pet.breed === breed);


    if (!detailpet) {
        return (
            <div className="container my-5 text-center">
                <h3 className="text-danger">Pet not found</h3>
                <p>Please check the pet name or go back to the pet list.</p>
            </div>
        );
    }

    return (
        <div className="container my-4">

            <div className="row mb-4">
                <div className="col">
                    <h2 className="fw-bold text-primary text-capitalize px-2">
                        Information & Care Tips
                    </h2>
                </div>
            </div>


            <div className="row g-4">
                <div className="col-md-6">
                    <ImageGallery pet={detailpet} />
                </div>
                <div className="col-md-6">
                    <PetInfor pet={detailpet} />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col">
                    <GroomingVideo pet={detailpet} />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col">
                    <HealthyTips pet={detailpet} />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col">
                    <Feeding pet={detailpet} />
                </div>
            </div>
        </div>
    );
}

export default PetDetail;
