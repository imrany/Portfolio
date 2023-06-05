// @flow strict
import Slider from "react-slick"
function HeroSection() {
    const email=()=>{
        window.location.href='mailto:imranmat254@gmail.com'
    }
    const settings = {
        fade: true,
        speed: 2000,
        autoplaySpeed: 3000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    };
    return (
        <>
            <div className="flex h-[80vh] max-md:h-[70vh] items-center max-md:justify-center sm:py-6 sm:px-6 border-b max-sm:py-1" id="hero-section">
                <div id="call-to-action" className='w-[45vw] max-md:w-[90vw]'>
                    <p className='lg:text-5xl text-3xl'>Explore my software development projects, products and features</p>
                    <p className='my-6 text-lg w-[35vw] max-md:w-[60vw]'>I'm Imran, a fullstack web developer, javascript programmer and a freelancer.</p>
                    <button onClick={email} className='text-base bg-black text-white border-none py-2 px-7 rounded-[50px]'>
                        Hire me
                    </button>
                </div>
                <Slider {...settings} className="hero__slider">
                    <div id="hero-image" className="h-[25vw] rounded-lg"></div>
                    <div id="hero-image1" className="h-[25vw] rounded-lg"></div>
                    <div id="hero-image2" className="h-[25vw] rounded-lg"></div>
                </Slider>
            </div>
        </>
    );
};

export default HeroSection;