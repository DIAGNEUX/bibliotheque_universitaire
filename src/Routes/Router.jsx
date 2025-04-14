import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "../Pages/AccueilPages/Accueil";
import Catalogue from "../Pages/CataloguePages/Catalogue";
import Services from "../Pages/ServicesPages/Services";
import Contact from "../Pages/ContactPages/Contact";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/Catalogue" element={<Catalogue />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRouter;
