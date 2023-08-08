// @flow strict
import Slider from "react-slick"
function HeroSection() {
    const settings = {
        fade: true,
        speed: 2000,
        autoplaySpeed: 15000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    };
    return (
        <>
            <Slider {...settings} className="hero__slider text-white">
                <div id="hero-image">
                    <div className="flex flex-col h-[80vh] justify-center max-md:items-center max-md:text-center max-sm:w-[100vw] md:ml-[100px]">
                        <p className='lg:text-5xl text-3xl md:w-[600px] font-semibold'>Kreative Websign design and development company.</p>
                        <p className='my-6 text-base'>We design, develop and manage websites for businesses, organizations and clients in Kenya.</p>
                        <a href="mailto:imranmat254@gmail.com" target="_blank" rel="noopenner norefferer" className='font-semibold text-base border-[1px] h-[40px] border-white flex justify-center items-center w-[150px] hover:bg-white hover:text-black'>
                            Contact Us
                        </a>
                    </div>
                </div>
                <div id="hero-image1">
                    <div className="flex flex-col h-[80vh] max-md:items-center max-md:text-center justify-center md:ml-[100px]">
                        <p className='lg:text-5xl text-3xl md:w-[600px] font-semibold'>Kreative Websign design and development company.</p>
                        <p className='my-6 text-base'>We design, develop and manage websites for businesses, organizations and clients in Kenya.</p>
                        <a href="mailto:imranmat254@gmail.com" target="_blank" rel="noopenner norefferer" className='font-semibold text-base border-[1px] h-[40px] border-white flex justify-center items-center w-[150px] hover:bg-white hover:text-black'>
                            Contact Us
                        </a>
                    </div>
                </div>
                <div id="hero-image2">
                    <div className="flex flex-col h-[80vh] max-md:items-center max-md:text-center justify-center md:ml-[100px]">
                        <p className='lg:text-5xl text-3xl md:w-[600px] font-semibold'>Kreative Websign design and development company.</p>
                        <p className='my-6 text-base'>We design, develop and manage websites for businesses, organizations and clients in Kenya.</p>
                        <a href="mailto:imranmat254@gmail.com" target="_blank" rel="noopenner norefferer" className='text-base font-semibold border-[1px] h-[40px] border-white flex justify-center items-center w-[150px] hover:bg-white hover:text-black'>
                            Contact Us
                        </a>
                    </div>
                </div>
            </Slider>
        </>
    );
};

export default HeroSection;