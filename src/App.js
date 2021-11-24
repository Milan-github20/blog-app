import React from "react";
import Button from "./components/Button/button";
import Card from "./components/Card/card";
import Footer from "./components/Footer/footer";
import Hero from "./components/Hero/hero";
import Main from "./components/Main/main";
import Navbar from "./components/Navbar/navbar";

const App = () => {
  return (
    <div>
      <div>
        <Button />
        <Card />
        <Footer />
        <Hero />
        <Main />
        <Navbar />
      </div>
    </div>
  );
};

export default App;
