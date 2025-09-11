import { Route, Routes } from "react-router-dom";
import AppPetOwner from "../src/Pages/PetOwner/AppPetOwner";
import Calendar from "./Pages/calendar";



export default function App() {
  return (
    <div className="test">
      <AppPetOwner />
      <Routes>
        <Route path="/calendar" element={<Calendar />} ></Route>
      </Routes>
    </div>
  );
}



