import React, { useState } from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import ScrollTop from "./components/Scroll";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import ClassesFrench from "./pages_fr/Classes_fr";

// PageNotFound component
const PageNotFound = () => {
  return <h1>404 - Page Not Found</h1>;
};

export default function App() {
  const [language, setLanguage] = useState("EN");

  const handleLanguageChange = () => {
    setLanguage((prevLanguage) => (prevLanguage === "EN" ? "FR" : "EN"));
  };

  return (
    <div>
      <Router>
        <ScrollTop />
        <Navbar
          language={language}
          onLanguageChange={handleLanguageChange}
        />
        <Switch>
          <Route
            path="/"
            exact
            component={() => <Home language={language} />}
          />
          <Route
            path={language === "FR" ? "/Classes_fr" : "/Classes"}
            exact
            component={language === "FR" ? ClassesFrench : Classes}
          />
          {/* Page Not Found */}
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}
