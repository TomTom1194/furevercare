import InforContact from "../../Component/pet_owner/contactus/InforContact";
import HeroBanner from "../../Component/pet_owner/HeroBanner";

function ContactUs() {
    return (
        <div className="contactus">
            <HeroBanner url="https://t4.ftcdn.net/jpg/03/95/04/15/360_F_395041586_h21AxqD0dNjxUw3lKFiV5t7qMBJs6wfe.jpg" header="Contact Us" slogan="Feel free to reach out to us via email, phone, or visit our office. We’d love to hear from you!" blur={true} />
            <InforContact />
        </div>
    );
}

export default ContactUs;