// @flow strict
import { useEffect } from "react";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import HeroSection from "../components/ui/HeroSection";
import Projects from "../components/ui/Projects";
import About from "../components/ui/About";

function Home() {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <>
            <Header/>
                <HeroSection/>
                <About/>
                <Projects/>
            <Footer/>
        </>
    );
};

export default Home;