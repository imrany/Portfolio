// @flow strict
import Slider from "react-slick"
import blog from '../../assets/blog.jpg'
import img1 from '../../assets/image1.jpg'
import img2 from '../../assets/image2.jpg'
import img3 from '../../assets/image3.jpg'
import img4 from '../../assets/image4.jpg'

function Projects() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
    };
    return (
        <div className='py-14 px-[10vw]' id='projects'>
            <p className="text-4xl max-md:text-xl mb-8 text-center">Projects</p>
            <div>
                <Slider {...settings} className="hero__slider">
                    <div className="max-sm:px-[10px] md:px-[20px] max-sm:w-[80vw] max-md:w-[60vw] md:w-[40vw] lg:w-[22vw] max-md:mb-[60px] max-md:pb-4">
                        <a href={img1} target="_blank" rel="noopener noreferrer">
                            <img src={img1} alt="Openspace" className='md:w-[600px] max-sm:w-[80vw] max-sm:h-[50vw] max-md:w-[60vw] max-md:h-[45vw] md:h-[170px] rounded-t-[10px]'/>
                        </a>
                        <a href="https://developer-openspace-dev.web.app/" target="_blank" rel='noopener noreferrer' className="my-6">
                            <p className='text-lg font-semibold mb-4'>Openspace</p>
                            <p className='font-thin'>
                                Openspace was platform that we developed to share software.
                            </p>
                        </a>
                    </div>

                    <div className="max-sm:px-[10px] md:px-[20px] max-sm:w-[80vw] max-md:w-[60vw] md:w-[40vw] lg:w-[22vw] max-md:mb-[60px] max-md:pb-4">
                        <a href={blog} target="_blank" rel="noopener noreferrer">
                            <img src={blog} alt="Campus blogs" className='md:w-[600px] max-sm:w-[80vw] max-sm:h-[50vw] max-md:w-[60vw] max-md:h-[45vw] md:h-[170px] rounded-t-[10px]'/>
                        </a>
                        <a href="https://campus-blog-lvmx.onrender.com/" target="_blank" rel='noopener noreferrer' className="my-6">
                            <p className='text-lg font-semibold mb-4'>Campus blogs</p>
                            <p className='font-thin'>
                                Get popular campus/university news and blogs with easy, we post about universities in Kenya and around the world
                            </p>
                        </a>
                    </div>

                    <div className="max-sm:px-[10px] md:px-[20px] max-sm:w-[80vw] max-md:w-[60vw] md:w-[40vw] lg:w-[22vw] max-md:mb-[60px] max-md:pb-4">
                        <a href={img1} target="_blank" rel="noopener noreferrer">
                            <img src={img3} alt="Openspace" className='md:w-[600px] max-sm:w-[80vw] max-sm:h-[50vw] max-md:w-[60vw] max-md:h-[45vw] md:h-[170px] rounded-t-[10px]'/>
                        </a>
                        <a href="https://developer-openspace-dev.web.app/" target="_blank" rel='noopener noreferrer' className="my-6">
                            <p className='text-lg font-semibold mb-4'>Openspace</p>
                            <p className='font-thin'>Get popular campus/university news and blogs with easy, we post about universities in Kenya and around the world</p>
                        </a>
                    </div>

                    <div className="max-sm:px-[10px] md:px-[20px] max-sm:w-[80vw] max-md:w-[60vw] md:w-[40vw] lg:w-[22vw] max-md:mb-[60px] max-md:pb-4">
                        <a href={img1} target="_blank" rel="noopener noreferrer">
                            <img src={img1} alt="Openspace" className='md:w-[600px] max-sm:w-[80vw] max-sm:h-[50vw] max-md:w-[60vw] max-md:h-[45vw] md:h-[170px] rounded-t-[10px]'/>
                        </a>
                        <a href="https://developer-openspace-dev.web.app/" target="_blank" rel='noopener noreferrer' className="my-6">
                            <p className='text-lg font-semibold mb-4'>Openspace</p>
                            <p className='font-thin'>Get popular campus/university news and blogs with easy, we post about universities in Kenya and around the world</p>
                        </a>
                    </div>

                    <div className="md:px-[20px] max-sm:px-[10px] max-sm:w-[80vw] max-md:w-[60vw] md:w-[40vw] lg:w-[22vw] max-md:mb-[60px] max-md:pb-4">
                        <a href={img1} target="_blank" rel="noopener noreferrer">
                            <img src={img3} alt="Openspace" className='md:w-[600px] max-sm:w-[80vw] max-sm:h-[50vw] max-md:w-[60vw] max-md:h-[45vw] md:h-[170px] rounded-t-[10px]'/>
                        </a>
                        <a href="https://developer-openspace-dev.web.app/" target="_blank" rel='noopener noreferrer' className="my-6">
                            <p className='text-lg font-semibold mb-4'>Openspace</p>
                            <p className='font-thin'>Get popular campus/university news and blogs with easy, we post about universities in Kenya and around the world</p>
                        </a>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Projects;