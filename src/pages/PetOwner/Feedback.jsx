import FormFeedback from "../../Component/pet_owner/feedback/FormFeedback";
import HeroBanner from "../../Component/pet_owner/HeroBanner";

function FeedBack() {
    return (
        <div className="feedback">
            <HeroBanner url="https://www.brodieanimalhospital.com/blog/images/istock-1322461027-2000x1334.1000x0-is.jpg" header="Watch Out Customer Say" slogan="Your Feedback, Our Inspiration!" blur={true} />
            <FormFeedback />
        </div>
    );
}

export default FeedBack;