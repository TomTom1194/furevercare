import Carousel from "../../Component/pet_owner/home/Carousel";
import HomeCare from "../../Component/pet_owner/home/HomeCare";
import HomeProduct from "../../Component/pet_owner/home/HomeProduct";

function HomePetowner({ pet, product }) {
    return (
        <div className="home">
            <Carousel />
            <HomeCare db={pet} />
            <HomeProduct db={product} />
        </div>
    );
}

export default HomePetowner;