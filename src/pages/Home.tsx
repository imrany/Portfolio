// @flow strict
import { useEffect } from "react";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import HeroSection from "../components/ui/HeroSection";
import Work from "../components/ui/Apps";

function Home() {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <>
            <Header/>
            <HeroSection/>
            <Work/>
            <Footer/>
        </>
    );
};

export default Home;