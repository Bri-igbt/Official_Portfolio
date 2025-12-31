import React from 'react'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Project from "./components/Project.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <div>
            <>
                <Navbar />
                <Hero />
                <Project />
                <Services />
                <About />
                <Footer />

            </>
        </div>
    )
}
export default App

