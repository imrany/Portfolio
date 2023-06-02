// @flow strict
import img from "../../assets/moon_man.jpg"
function HeroSection() {
    const email=()=>{
        window.location.href='mailto:imranmat254@gmail.com'
    }
    return (
        <>
            <div className="flex h-[80vh] max-md:h-[70vh] items-center max-md:justify-center sm:py-6 sm:px-6 border-b max-sm:py-1" id="hero-section">
                <div id="call-to-action" className='w-[50vw] max-md:w-[90vw]'>
                    <p className='lg:text-6xl text-3xl'>Explore my software development projects, products and features</p>
                    <p className='my-6 text-lg w-[35vw] max-md:w-[60vw]'>I'm a fullstack web developer, javascript programmer and a freelancer.</p>
                    <button onClick={email} className='text-base bg-black text-white border-none py-2 px-7 rounded-[50px]'>
                        Hire me
                    </button>
                </div>
                <a href={img} target="_blank" rel="noopener noreferrer">
                    <img src={img} alt="hero image" id="hero-image" className="w-[40vw] h-[28vw] rounded-lg"/>
                </a>
            </div>
        </>
    );
};

export default HeroSection;