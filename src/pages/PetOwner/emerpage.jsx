import Emergency from "../../Component/pet_owner/emergency/Emergency";
import HeroBanner from "../../Component/pet_owner/HeroBanner";

function EmerPage() {
    return (
        <div className="emerpage">
            <HeroBanner url="https://placehold.co/400" header="Emergency & Vet Help" slogan="Quick Help. Healthy Pets. Happy Owners." />
            <Emergency />
        </div>
    );
}

export default EmerPage;