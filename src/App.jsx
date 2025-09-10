import './App.css';

import { Route, Routes } from 'react-router-dom';
import Feedback from './pages/PetOwner/feedback';
import AboutUs from './pages/PetOwner/aboutus';
import ContactUs from './pages/PetOwner/contactus';
import petcare from "../src/Data/Petowner/petcare.json"
import PetCare from './pages/PetOwner/petcare';
import PetDetail from './pages/PetOwner/petdetail';
import NavPetowner from './Component/pet_owner/NavPetowner';
import petproduct from './Data/Petowner/petproduct.json';
import PetProduct from './pages/PetOwner/petproduct';
import ProductDetail from './pages/PetOwner/productdetail';
import EmerPage from './pages/PetOwner/emerpage';
import ScrollToTop from './Component/pet_owner/ScrollToTop';
import Home from './pages/PetOwner/home';
function App() {
  return (
    <div className="test">
      <NavPetowner />
      <ScrollToTop />
      <Routes>
        <Route path="/petowner" element={<Home pet={petcare} product={petproduct} />} />
        <Route path="/petowner/petcare" element={<PetCare db={petcare} />} />
        <Route path="/petowner/petproduct" element={<PetProduct db={petproduct} />} />
        <Route path="/petowner/feedback" element={<Feedback />} />
        <Route path="/petowner/aboutus" element={<AboutUs />} />
        <Route path="/petowner/contactus" element={<ContactUs />} />
        <Route path="/petowner/emergency" element={<EmerPage />} />
        <Route path="/petowner/petcare/:breed" element={<PetDetail db={petcare} />} />
        <Route path="/petowner/petproduct/:id" element={<ProductDetail db={petproduct} />} />
      </Routes>
    </div>
  );
}

export default App;
