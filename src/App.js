import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home';
import AboutPage from './components/About';
import EaseIn from './components/Ease-In';
import StepUp from "./components/Step-Up";
import AllIn from './components/All-In';
import HealthyHabits from './components/Healthy Habits';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/ease-in" component={EaseIn} />
        <Route exact path="/step-up" component={StepUp} />
        <Route exact path="/all-in" component={AllIn} />
        <Route exact path="/healthy-habits" component={HealthyHabits} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
