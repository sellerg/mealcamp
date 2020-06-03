import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import GlobalStyles from "./styles/Global";
import HomePage from "./components/pages/Home";
import AboutPage from "./components/pages/About";
import RecipePage from "./components/pages/Recipes";
import SurveyButtonPage from "./components/pages/SurveyButtonPage";
import SurveyPage from "./components/pages/SurveyPage";
import Footer from "./components/footer/Footer";
import styled from "styled-components";

function App() {
  const [navbarOpen, setNavbar] = useState(false);

  const handleNavbar = () => {
    setNavbar(!navbarOpen);
  };

  return (
    <Div>
      <GlobalStyles />
      <Router>
        <Navbar navbarState={navbarOpen} handleNavbar={handleNavbar} />

        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/recipes" component={RecipePage} />
        <Route path="/mealplans" exact component={SurveyButtonPage} />
        <Route path="/mealplans/survey" component={SurveyPage} />

        <Footer />
      </Router>
    </Div>
  );
}

const Div = styled.div`
  position: relative;
  padding-bottom: 6rem;
`;

export default App;
