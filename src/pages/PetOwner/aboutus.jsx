import InforTeam from "../../Component/pet_owner/aboutus/InforTeam";
import HeroBanner from "../../Component/pet_owner/HeroBanner";

function AboutUs() {
    return (
        <div className="aboutus">
            <HeroBanner url="https://www.bridgedental.gg/content/uploads/2020/07/blog-banner-team.jpg" />
            <InforTeam />
        </div>
    );
}

export default AboutUs;