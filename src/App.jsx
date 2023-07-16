import React from "react";
import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";
import { ArrowSection } from "./Components/ArrowSection";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Portfolio } from "./Components/Portfolio";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      {/* <About /> */}
      <Skills />
      {/* <ArrowSection /> */}
      <Portfolio />
      {/* <ArrowSection /> */}
      <Contact />
      <ReactNotifications />

      {/* <ArrowSection /> */}
      <Footer />
    </div>
  );
};

export default App;
