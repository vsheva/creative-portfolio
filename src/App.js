import React from 'react';
import Header from "./container/header/Header";
import About from "./container/about/About";
import Work from "./container/work/Work";
import Skills from "./container/skills/Skills";
import Testimonial from "./container/testimonial/Testimonial";
import Footer from "./container/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./App.scss"


 const App = () => {
    return (
        <div className="app">
          <Navbar/>
        <Header/>
        <About />
        <Work />
        <Skills/>
        <Testimonial />
        <Footer />
        </div>

    );
};

export default App;