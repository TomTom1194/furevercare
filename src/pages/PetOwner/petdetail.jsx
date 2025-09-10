import { useParams } from "react-router-dom";
import ImageGallery from "../../Component/pet_owner/petdetail/ImageGallary";


function PetDetail({ db }) {
    const { breed } = useParams();

    const detailpet = db.find((pet) => pet.breed === breed);


    return (
        <div className="container my-4">
            <ImageGallery pet={detailpet} />
        </div>
    );
}

export default PetDetail;
