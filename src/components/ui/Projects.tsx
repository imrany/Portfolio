// @flow strict
import Slider from "react-slick"
import blog from '../../assets/blog.jpg'
import img1 from '../../assets/website1.jpg'
import email from '../../assets/website2.jpg'
import chatbot from '../../assets/email.jpg'

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
        <div className='pt-10 px-[10vw]' id='projects'>
            <p className="mb-8 text-center text-4xl max-md:text-xl font-semibold text-gray-700">Our Work</p>
            <div>
                <Slider {...settings} className="hero__slider">
                    <div className="max-sm:px-[10px] md:px-[20px] max-sm:w-[100vw] max-md:w-[60vw] md:w-[40vw] lg:w-[22vw] max-md:mb-[10px] max-md:pb-4">
                        <a href={img1} target="_blank" rel="noopener noreferrer">
                            <img src={img1} alt="Campus blogs" className='md:w-[600px] max-sm:w-[100vw] max-sm:h-[50vw] max-md:w-[60vw] max-md:h-[45vw] md:h-[170px] rounded-t-[10px]'/>
                        </a>
                        <div className="my-6">
                            <p className='text-lg font-semibold mb-4'>Design and Develop website</p>
                            <p className=''>
                                We design and develop websites for clients and businesses at reasonable prices.
                            </p>
                        </div>
                    </div>

                    <div className="max-sm:px-[10px] md:px-[20px] max-sm:w-[100vw] max-md:w-[60vw] md:w-[40vw] lg:w-[22vw] max-md:mb-[10px] max-md:pb-4">
                        <a href={blog} target="_blank" rel="noopener noreferrer">
                            <img src={blog} alt="Campus blogs" className='md:w-[600px] max-sm:w-[100vw] max-sm:h-[50vw] max-md:w-[60vw] max-md:h-[45vw] md:h-[170px] rounded-t-[10px]'/>
                        </a>
                        <div className="my-6">
                            <p className='text-lg font-semibold mb-4'>Blogging website</p>
                            <p className=''>
                                We develop blogging websites for bloggers and clients at reasonable prices.
                            </p>
                        </div>
                    </div>

                    <div className="max-sm:px-[10px] md:px-[20px] max-sm:w-[100vw] max-md:w-[60vw] md:w-[40vw] lg:w-[22vw] max-md:mb-[10px] max-md:pb-4">
                        <a href={chatbot} target="_blank" rel="noopener noreferrer">
                            <img src={chatbot} alt="Assistance" className='md:w-[600px] max-sm:w-[100vw] max-sm:h-[50vw] max-md:w-[60vw] max-md:h-[45vw] md:h-[170px] rounded-t-[10px]'/>
                        </a>
                        <div className="my-6">
                            <p className='text-lg font-semibold mb-4'>Chatbots</p>
                            <p className=''>We develop chatbot and Artificial intelligent bot for our whatsapp and telegram clients.</p>
                        </div>
                    </div>

                    <div className="max-sm:px-[10px] md:px-[20px] max-sm:w-[100vw] max-md:w-[60vw] md:w-[40vw] lg:w-[22vw] max-md:mb-[10px] max-md:pb-4">
                        <a href={email} target="_blank" rel="noopener noreferrer">
                            <img src={email} alt="Open email" className='md:w-[600px] max-sm:w-[100vw] max-sm:h-[50vw] max-md:w-[60vw] max-md:h-[45vw] md:h-[170px] rounded-t-[10px]'/>
                        </a>
                        <a href="http://github.com/imrany/open-email" target="_blank" rel='noopener noreferrer' className="my-6">
                            <p className='text-lg font-semibold mb-4'>APIs</p>
                            <p className=''>
                                We develop API's and web services for clients and companies.
                            </p>
                        </a>
                    </div>

                    <div className="md:px-[20px] max-sm:px-[10px] max-sm:w-[100vw] max-md:w-[60vw] md:w-[40vw] lg:w-[22vw] max-md:mb-[10px] max-md:pb-4">
                        <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="imranmatano" data-version="v1">
                            <a className="badge-base__link LI-simple-link" href="https://ke.linkedin.com/in/imranmatano?trk=profile-badge" target="_blank" rel="noopener noreferrer">
                                imran matano linkedIn
                            </a>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Projects;