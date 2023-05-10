// @flow strict
import * as React from 'react';
import img from "../../assets/api.jpg"

function HeroSection() {
    const email=()=>{
        window.location.href='mailto:imranmat254@gmail.com'
    }

    const mobileViewUi=document.querySelector('#mobile-view') as HTMLDivElement
    // mobileViewUi.style.background='../../assets/api.jpg'

    return (
        <>
            {/* <div className='flex justify-around mt-8'>
                <div id="call-to-action" className='my-[20vh]'>
                    <p className='text-5xl'>Get started with less</p>
                    <p>I'm a fullstack web developer, </p>
                    <button onClick={email} className='text-base bg-black text-white border-none py-2 px-7 rounded-[50px]'>
                        Hire me
                    </button>
                </div>
                
                <div id="image-section">
                    <img src={img} alt="hero image" className='w-[50vw] h-[80vh] rounded-lg'/>
                </div>
            </div> */}

            <div className="bg-[url('./assets/api.jpg')] bg-cover py-10 text-white text-center bg-center bg-no-repeat" id='mobile-view'>
                <div id="call-to-action" className='my-[20vh]'>
                    <p className='text-5xl'>Get started with less</p>
                    <p>I'm a fullstack web developer, </p>
                    <button onClick={email} className='text-base bg-black text-white border-none py-2 px-7 rounded-[50px]'>
                        Hire me
                    </button>
                </div>
            </div>
        </>
    );
};

export default HeroSection;