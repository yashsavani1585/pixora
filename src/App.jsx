import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/heder/heder";
import Home from "./page/home/home";
import Footer from "./components/footer/footer";
import AboutUs from "./page/AboutUs/AboutUs";
import Project from "./page/Project/Project";
import ContactUs from "./page/Contact-Us/ContactUs";
import MobileDevlopment from "./page/MobileDevlopment/MobileDevlopment";
import DigitalMarketing from "./page/DigitalMarketing/DigitalMarketing";
import GraphicsDesign from "./page/GraphicsDesign/GraphicsDesign";
import JewelleryDesign from "./page/JewelleryDesign/JewelleryDesign";
import WebDevelopmentPage from "./page/webDevlpment/WebDevlopmentPage";

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        {/* Routes */}
        <Routes>
          {/* Redirect "/" to "/home" */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Home Page */}
          <Route path="/home" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/web-development" element={<WebDevelopmentPage />} />
          <Route path="/mobile-app" element={<MobileDevlopment />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/graphics-design" element={<GraphicsDesign />} />
          <Route path="/jewellery-design" element={<JewelleryDesign />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
