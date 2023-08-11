// @flow strict


function About() {
    return (
        <div className="flex flex-col items-center mb-10 mt-5" id="about">
            <div className="text-lg lg:w-[70vw] max-md:px-10">
                <br/>
                <p>
                    With our experienced designer and developer, we've delivered and maintained great websites and earn trust from our clients and business partners.  
                </p><br/>
                <p>
                    Contact us via
                    <a className="ml-2 text-blue-600" href="mailto:imranmat254@gmail.com" target="_blank" rel="noopener noreferrer">imranmat254@gmail.com</a>
                </p>
            </div>
            
            <div className="flex text-2xl mt-8">
                <a href="http://github.com/imrany" title="my github profile" target="_blank" rel="noopener noreferrer">
                    <i className="ri-github-fill text-gray-800"></i>
                </a>
                <a className="ml-2" href="https://www.linkedin.com/in/imranmatano/" title="my linkedin profile" target="_blank" rel="noopener noreferrer">
                    <i className="ri-linkedin-fill text-gray-800"></i>
                </a>
                <a className="ml-2" href="http://wa.me/254734720752" title="Text me on whatsapp" target="_blank" rel="noopener noreferrer">
                    <i className="ri-whatsapp-fill text-gray-800"></i>
                </a>
                <a className="ml-2" href="https://www.instagram.com/imrany00/" title="my instagram profile" target="_blank" rel="noopener noreferrer">
                    <i className="ri-instagram-fill text-gray-800"></i>
                </a>
                <a className="ml-2" href="http://twitter.com/matano_imran" title="my twitter profile" target="_blank" rel="noopener noreferrer">
                    <i className="ri-twitter-fill text-gray-800"></i>
                </a>
                <a className="ml-2" href="mailto:imranmat254@gmail.com" title="my twitter profile" target="_blank" rel="noopener noreferrer">
                    <i className="ri-mail-fill text-gray-800"></i>
                </a>
            </div>
        </div>
    );
};

export default About;