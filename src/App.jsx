import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import PetOwnerLayout from "./layouts/PetOwnerLayout";
import AnimalShelterLayout from "./layouts/AnimalShelterLayout";
import VetLayout from "./layouts/VetLayout";

//Start
import Home from "./components/Home/Home";

//Petowner
import HomePetowner from "./pages/PetOwner/home";
import PetCare from "./pages/PetOwner/petcare";
import PetProduct from "./pages/PetOwner/petproduct";
import FeedBack from "./pages/PetOwner/feedback";
import AboutUs from "./pages/PetOwner/aboutus";
import ContactUs from "./pages/PetOwner/contactus";
import EmerPage from "./pages/PetOwner/emerpage";
import PetDetail from "./pages/PetOwner/petdetail";
import ProductDetail from "./pages/PetOwner/productdetail";
import petcare from "../src/Data/Petowner/petcare.json";
import petproduct from "../src/Data/Petowner/petproduct.json";

//Shelter
import Events from "./pages/Shelter/Events";
import Gallery from "./pages/Shelter/Gallery";
import HomeShelter from "./pages/Shelter/HomeShelter";
import ShelterContact from "./pages/Shelter/ShelterContact";
import Success from "./pages/Shelter/Success";

//Vet
import HomeVet from "./pages/Veterinarian/HomeVeterinarian";
import VetProfile from "./pages/Veterinarian/VetProfile";
import MyProfile from "./Component/pet_owner/myprofile/MyProfile";
import MyPetDetail from "./Component/pet_owner/myprofile/MyPetDetail";

import "./index.css";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/*Start*/}
        <Route path="/" element={<Home />} />

        {/* PetOwner routes */}
        <Route path="/petowner" element={<PetOwnerLayout />}>
          <Route
            path="homepetowner"
            element={<HomePetowner pet={petcare} product={petproduct} />}
          />
          <Route path="petcare" element={<PetCare db={petcare} />} />
          <Route path="petproduct" element={<PetProduct db={petproduct} />} />
          <Route path="feedback" element={<FeedBack />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="emergency" element={<EmerPage />} />
          <Route path="petcare/:breed" element={<PetDetail db={petcare} />} />
          <Route
            path="petproduct/:id"
            element={<ProductDetail db={petproduct} />}
          />
        </Route>

        {/* Veterinarian routes */}
        <Route path="/veterinarian" element={<VetLayout />}>
          <Route index element={<HomeVet />} />
          <Route path=":id" element={<VetProfile />} />
        </Route>

        {/* Animal Shelter routes */}
        <Route path="/animalshelter" element={<AnimalShelterLayout />}>
          <Route path="animal" element={<AnimalShelter />}></Route>
          <Route
            path="animal/:id"
            element={<AnimalDetail animal={Animals} />}
          ></Route>
          <Route path="story" element={<SuccessStory />}></Route>
          <Route path="story/:id" element={<StoryDetail />}></Route>
          <Route path="event" element={<Event />}></Route>
          <Route path="sheltercontact" element={<ShelterContact />}></Route>
        </Route>

        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="container mt-4">
              <h1>404 - Page Not Found</h1>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
