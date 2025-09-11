import { Route, Routes } from "react-router-dom";
import NavBar from "./Component/animalshelter/NavAnimalShelter";
// import Footer from "./Component/Footer";

import Animals from "./Data/Animalshelter/animalshelter.json";
import AnimalShelter from "./Component/animalshelter/gallery/AnimalShelter";
import AnimalDetail from "./Component/animalshelter/gallery/AnimalDetail";
import SuccessStory from "./Component/animalshelter/successstory/SuccessStory";
import StoryDetail from "./Component/animalshelter/successstory/StoryDetail";
import Event from "./Component/animalshelter/event/Event";
import ShelterContact from "./Component/animalshelter/sheltercontact/ShelterContact";

function App() {
  return (
    <>
      <NavBar />

      <div className="app">
        <div className="container">
          <Routes>
            <Route path="/animal" element={<AnimalShelter />}></Route>
            <Route
              path="/animal/:id"
              element={<AnimalDetail animal={Animals} />}
            ></Route>
            <Route path="/story" element={<SuccessStory />}></Route>
            <Route
              path="/story/:id"
              element={<StoryDetail />}
            ></Route>
            <Route path="/event" element={<Event />}></Route>
            <Route path="/sheltercontact" element={<ShelterContact />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
