// @flow strict
import * as React from 'react';
import img from '../../assets/moon_man.jpg'
import img1 from '../../assets/api.jpg'
import img2 from '../../assets/blog.jpg'

function Work() {
    const data=[
        {
            imgUrl:img,
            title:"Campus blogs",
            desc:`Get popular campus/university news and blogs with easy, we post about universities in Kenya and around the world`
        },
        {
            imgUrl:img1,
            title:"Campus blogs",
            desc:`Get popular campus/university news and blogs with easy, we post about universities in Kenya and around the world`
        },
        {
            imgUrl:img2,
            title:"Campus blogs",
            desc:`Get popular campus/university news and blogs with easy, we post about universities in Kenya and around the world`
        },
        {
            imgUrl:img,
            title:"Campus blogs",
            desc:`Get popular campus/university news and blogs with easy, we post about universities in Kenya and around the world`
        }
    ]
    return (
        <div className='py-10 flex flex-col items-center' id='work'>
            <p className='text-2xl text-gray-500 text-center font-semibold mb-10'>Work</p>
            <div className="sm:grid md:grid-cols-2 lg:grid-cols-4 max-md:flex max-md:flex-col max-md:items-center">
                {data&&data.map((i,n)=>(
                    <div className="lg:px-[20px] md:px-[20px] max-md:w-[40vw] sm:w-[20vw] max-sm:w-[90vw] max-sm:mb-4" key={n}>
                        <a href={i.imgUrl} target="_blank" rel="noopener noreferrer">
                            <img src={i.imgUrl} alt={i.title} className='w-[600px] max-sm:h-[50vw] sm:h-[200px] rounded-[20px]'/>
                        </a>
                       <div className="my-6">
                            <p className='text-lg font-semibold mb-4'>{i.title}</p>
                            <p>{i.desc}</p>
                       </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;