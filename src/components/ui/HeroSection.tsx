// @flow strict
function HeroSection() {
    const email=()=>{
        window.location.href='mailto:imranmat254@gmail.com'
    }
    return (
        <>
            <div className="bg-[url('./assets/api.jpg')] bg-cover sm:py-6 max-sm:py-1 text-white text-center bg-center bg-no-repeat" id="hero-section">
                <div id="call-to-action" className='my-[20vh]'>
                    <p className='text-5xl'>Get started with less</p>
                    <p className='my-3'>I'm a fullstack web developer, </p>
                    <button onClick={email} className='text-base bg-black text-white border-none py-2 px-7 rounded-[50px] hover:bg-white hover:text-black hover:rounded-[3px] transition-[ease-in-out,500ms]'>
                        Hire me
                    </button>
                </div>
            </div>
        </>
    );
};

export default HeroSection;