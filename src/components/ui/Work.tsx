// @flow strict
import { Link } from 'react-router-dom';
import { data } from '../data';

function Work() {
    
    return (
        <div className='py-12 flex flex-col items-center' id='work'>
            <p className='text-2xl text-gray-500 text-center font-semibold mb-10'>Apps <i className='ri-apps-line'></i></p>
            <div className="md:grid md:gap-y-10 md:gap-x-8 md:grid-cols-2 lg:grid-cols-4 max-md:flex max-md:flex-col max-md:items-center">
                {data&&data.map((i,n)=>(
                    <div className="md:px-[20px] max-sm:w-[80vw] max-md:w-[60vw] md:w-[40vw] lg:w-[22vw] max-md:mb-[60px] max-md:border-b-2 max-md:pb-4" key={n}>
                        <a href={i.imgUrl} target="_blank" rel="noopener noreferrer">
                            <img src={i.imgUrl} alt={i.title} className='md:w-[600px] max-sm:w-[80vw] max-sm:h-[50vw] max-md:w-[60vw] max-md:h-[45vw] md:h-[200px] rounded-[20px]'/>
                        </a>
                       <Link to={`work/${n}`} className="my-6">
                            <p className='text-lg font-semibold mb-4'>{i.title}</p>
                            <p>{i.desc}</p>
                       </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;