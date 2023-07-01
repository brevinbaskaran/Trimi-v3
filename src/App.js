import React from "react";
import "./style.css";
import Navbar from "./components/Navbar"
import ScrollTop from "./components/Scroll"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages/Home"
import Classes from "./pages/Classes"

export default function App() {
  return (
    <div>
      <Router>
        <ScrollTop/>
        <Navbar/>
        <Switch>
            <Route path="/" exact component= {Home} />
            <Route path="/Classes" exact component= {Classes} />
          </Switch>
        </Router>
    </div>
  );
}

