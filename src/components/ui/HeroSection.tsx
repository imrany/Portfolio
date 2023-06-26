// @flow strict
import Slider from "react-slick"
function HeroSection() {
    const settings = {
        fade: true,
        speed: 2000,
        autoplaySpeed: 6000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
    };
    return (
        <>
            <Slider {...settings} className="hero__slider text-white">
                <div id="hero-image">
                    <div className="flex flex-col h-[80vh] items-center justify-center ">
                        <p className='lg:text-5xl text-3xl'>A Full Stack developer.</p>
                        <p className='my-6 text-lg text-center'>I'm Imran matano, a fullstack web developer, javascript programmer and a freelancer.</p>
                        <a href="/Resume.pdf" target="_blank" rel="noopenner norefferer" className='text-base border-[1px] border-white py-2 px-7 hover:bg-white hover:text-black'>
                            View Resume
                        </a>
                    </div>
                </div>
                <div id="hero-image1">
                    <div className="flex flex-col h-[80vh] items-center justify-center ">
                        <p className='lg:text-5xl text-3xl'>A Backend Developer.</p>
                        <p className='my-6 text-lg text-center'>I've been developing server-side applications with nodejs and Django.</p>
                        <a href="/Resume.pdf" target="_blank" rel="noopenner norefferer" className='text-base border-[1px] border-white py-2 px-7 hover:bg-white hover:text-black'>
                            View Resume
                        </a>
                    </div>
                </div>
                <div id="hero-image2">
                    <div className="flex flex-col h-[80vh] items-center justify-center ">
                        <p className='lg:text-5xl text-3xl'>A Frontend Developer.</p>
                        <p className='my-6 text-lg text-center'>I've been developing websites using reactjs, svelket and HTML, CSS and Vanillajs.</p>
                        <a href="/Resume.pdf" target="_blank" rel="noopenner norefferer" className='text-base border-[1px] border-white py-2 px-7 hover:bg-white hover:text-black'>
                            View Resume
                        </a>
                    </div>
                </div>
            </Slider>
        </>
    );
};

export default HeroSection;