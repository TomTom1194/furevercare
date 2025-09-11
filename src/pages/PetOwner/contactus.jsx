import InforContact from "../../Component/pet_owner/contactus/InforContact";
import HeroBanner from "../../Component/pet_owner/HeroBanner";

function ContactUs() {
    return (
        <div className="contactus">
            <HeroBanner url="https://placehold.co/400" header="Contact Us" slogan="Feel free to reach out to us via email, phone, or visit our office. We’d love to hear from you!" />
            <InforContact />
        </div>
    );
}

export default ContactUs;