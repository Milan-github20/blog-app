import React from "react";
import Footer from "./components/Footer/footer";
import Hero from "./components/Hero/hero";
import Main from "./components/Main/main";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Hero />
          <Main />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">{/* <NotMatch /> */}</Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
