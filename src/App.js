/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";

import HeroBannerImage from "../src/assets/images/low-angle-view-unrecognizable-muscular-build-man-preparing-lifting-barbell-health-club.jpg";
const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${HeroBannerImage})`,
        opacity: 0.75,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        width: "100vw",
      }}
    >
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Box>
    </div>
  );
};

export default App;
