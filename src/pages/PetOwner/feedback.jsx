import FormFeedback from "../../Component/pet_owner/feedback/FormFeedback";
import HeroBanner from "../../Component/pet_owner/HeroBanner";

function FeedBack() {
    return (
        <div className="feedback">
            <HeroBanner url="https://placehold.co/400" header="Watch Out Customer Say" slogan="Your Feedback, Our Inspiration!" />
            <FormFeedback />
        </div>
    );
}

export default FeedBack;