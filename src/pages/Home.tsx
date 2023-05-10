// @flow strict
import { useEffect } from "react";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import HeroSection from "../components/ui/HeroSection";
import Work from "../components/ui/Work";
import Contact from "../components/ui/Contact";

function Home() {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <>
            <Header/>
            <HeroSection/>
            <Work/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;