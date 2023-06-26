// @flow strict
import Slider from "react-slick"
import { data } from '../data';

function Projects() {
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
        <div className='py-14 flex flex-col items-center' id='projects'>
            <p className="text-4xl max-md:text-xl mb-8">Projects</p>
            <div>
                <div className="md:grid md:gap-y-12 md:gap-x-8 md:grid-cols-2 lg:grid-cols-3 max-md:flex max-md:flex-col max-md:items-center">
                    {data&&data.map((i,n)=>(
                        <div className="md:px-[20px] max-sm:w-[80vw] max-md:w-[60vw] md:w-[40vw] lg:w-[22vw] max-md:mb-[60px] max-md:border-b-2 max-md:pb-4" key={n}>
                            <a href={i.imgUrl} target="_blank" rel="noopener noreferrer">
                                <img src={i.imgUrl} alt={i.title} className='md:w-[600px] max-sm:w-[80vw] max-sm:h-[50vw] max-md:w-[60vw] max-md:h-[45vw] md:h-[170px] rounded-t-[10px]'/>
                            </a>
                            <a href={i.url} target="_blank" rel='noopener noreferrer' className="my-6">
                                <p className='text-lg font-semibold mb-4'>{i.title}</p>
                                <p className='font-thin'>{i.desc}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;