import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HomePage from "./components/Home/index.js";
import AboutPage from "./components/About/index.js";
import EaseIn from "./components/Ease-In/index.js";
import StepUp from "./components/Step-Up/index.js";
import AllIn from "./components/All-In/index.js";
import HealthyHabits from "./components/Healthy Habits/index.js";
import ContactPage from './components/ContactPage/index.js';
import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";
//import './App.css';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#FFD600',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ease-in" element={<EaseIn />} />
          <Route path="/step-up" element={<StepUp />} />
          <Route path="/all-in" element={<AllIn />} />
          <Route path="/healthy-habits" element={<HealthyHabits />} />
          <Route path="/contact-page" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
