import Header from "./Component/animalshelter/Header";
// import Footer from "./Component/Footer";
import { Route, Routes } from "react-router-dom";

import AnimalShelter from "./pages/animalshelter/AnimalShelter";

function App() {
  return (
    <>
      <Header />

      <AnimalShelter />
    </>
  );
}

export default App;
