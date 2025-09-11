import InforTeam from "../../Component/pet_owner/aboutus/InforTeam";
import HeroBanner from "../../Component/pet_owner/HeroBanner";

function AboutUs() {
    return (
        <div className="aboutus">
            <HeroBanner url="https://placehold.co/400" header="Our Team" slogan="We are a passionate team dedicated to developing creative solutions and building great experiences for pet owners." />
            <InforTeam />
        </div>
    );
}

export default AboutUs;