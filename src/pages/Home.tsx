// @flow strict
import { useEffect } from "react";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import HeroSection from "../components/ui/HeroSection";
import Projects from "../components/ui/Projects";
import About from "../components/ui/About";
import Skills from "../components/ui/Skills";
import Services from "../components/ui/Service";

function Home() {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <>
            <Header/>
                <HeroSection/>
                <Services/>
                <About/>
                <Skills/>
                <Projects/>
            <Footer/>
        </>
    );
};

export default Home;