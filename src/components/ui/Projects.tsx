// @flow strict
import Slider from "react-slick"
import blog from '../../assets/blog.jpg'
import img1 from '../../assets/image1.jpg'
import cmd from '../../assets/image2.jpg'
import email from '../../assets/email.jpg'
import chatbot from '../../assets/chatbot.jpg'

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
                                Campus blogs was created to provide popular news and blogs for campus students. We post news and articles about universities in Kenya and around the world.
                            </p>
                        </a>
                    </div>

                    <div className="max-sm:px-[10px] md:px-[20px] max-sm:w-[80vw] max-md:w-[60vw] md:w-[40vw] lg:w-[22vw] max-md:mb-[60px] max-md:pb-4">
                        <a href={chatbot} target="_blank" rel="noopener noreferrer">
                            <img src={chatbot} alt="Assistance" className='md:w-[600px] max-sm:w-[80vw] max-sm:h-[50vw] max-md:w-[60vw] max-md:h-[45vw] md:h-[170px] rounded-t-[10px]'/>
                        </a>
                        <a href="https://assistance-six.vercel.app/" target="_blank" rel='noopener noreferrer' className="my-6">
                            <p className='text-lg font-semibold mb-4'>Assistance</p>
                            <p className='font-thin'>Assistance is a chatbot, I created to help and provide help to its users.</p>
                        </a>
                    </div>

                    <div className="max-sm:px-[10px] md:px-[20px] max-sm:w-[80vw] max-md:w-[60vw] md:w-[40vw] lg:w-[22vw] max-md:mb-[60px] max-md:pb-4">
                        <a href={email} target="_blank" rel="noopener noreferrer">
                            <img src={email} alt="Open email" className='md:w-[600px] max-sm:w-[80vw] max-sm:h-[50vw] max-md:w-[60vw] max-md:h-[45vw] md:h-[170px] rounded-t-[10px]'/>
                        </a>
                        <a href="http://github.com/imrany/open-email" target="_blank" rel='noopener noreferrer' className="my-6">
                            <p className='text-lg font-semibold mb-4'>Open Email</p>
                            <p className='font-thin'>
                                Open email is an API that sends emails to subscribed users.
                                View API documentation <a href="http://github.com/imrany/open-email" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">here</a>
                            </p>
                        </a>
                    </div>

                    <div className="md:px-[20px] max-sm:px-[10px] max-sm:w-[80vw] max-md:w-[60vw] md:w-[40vw] lg:w-[22vw] max-md:mb-[60px] max-md:pb-4">
                        <a href={cmd} target="_blank" rel="noopener noreferrer">
                            <img src={cmd} alt="Command line tool" className='md:w-[600px] max-sm:w-[80vw] max-sm:h-[50vw] max-md:w-[60vw] max-md:h-[45vw] md:h-[170px] rounded-t-[10px]'/>
                        </a>
                        <a href="https://developer-openspace-dev.web.app/" target="_blank" rel='noopener noreferrer' className="my-6">
                            <p className='text-lg font-semibold mb-4'>Command line game</p>
                            <p className='font-thin'>
                                Created a command line game as a personal project but check the source code
                                <a href="http://github.com/imrany/cli-game" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">here</a>
                            </p>
                        </a>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Projects;