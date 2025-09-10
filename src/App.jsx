import './App.css';
import Header from './Component/pet_owner/Header';
import { Route, Routes } from 'react-router-dom';
import Feedback from './pages/PetOwner/feedback';
import AboutUs from './pages/PetOwner/aboutus';
import ContactUs from './pages/PetOwner/contactus';
import petcare from "../src/Data/Petowner/petcare.json"
import PetCare from './pages/PetOwner/petcare';
import PetDetail from './pages/PetOwner/petdetail';
function App() {
  return (
    <div className="test">
      <Header />
      <Routes>
        <Route path="/petowner" element={<div>Home</div>} />
        <Route path="/petowner/petcare" element={<PetCare db={petcare} />} />
        <Route path="/petowner/petcare/:breed" element={<PetDetail db={petcare} />} />
        <Route path="/petowner/feedback" element={<Feedback />} />
        <Route path="/petowner/aboutus" element={<AboutUs />} />
        <Route path="/petowner/contactus" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
