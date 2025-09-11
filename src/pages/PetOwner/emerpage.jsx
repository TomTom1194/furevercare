import Emergency from "../../Component/pet_owner/emergency/Emergency";
import HeroBanner from "../../Component/pet_owner/HeroBanner";

function EmerPage() {
    return (
        <div className="emerpage">
            <HeroBanner url="https://heloise.com/wp-content/uploads/2023/09/pet-of-the-week-featured.jpg" header="Emergency & Vet Help" slogan="Quick Help. Healthy Pets. Happy Owners." blur={true} />
            <Emergency />
        </div>
    );
}

export default EmerPage;