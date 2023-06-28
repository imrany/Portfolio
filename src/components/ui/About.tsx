// @flow strict


function About() {
    return (
        <div className="flex flex-col items-center my-10" id="about">
            <p className="text-4xl max-md:text-xl">About Me</p>
            <div className="text-base font-thin lg:w-[70vw] max-md:px-10 max-sm:px-10">
                <br/>
                <p>
                    I started my web development journey back in 2019, when I started on the basics of HTML, CSS and little javascript which I learnt on <a className="text-blue-600" href="http://w3schools.com" target="_blank" rel="noopener noreferrer">w3schools</a>.
                    I also took a 6 weeks android application development at Zalego institute in Nairobi during the December period.
                </p><br/>
                <p>
                    2020, this is the year when I started my own software development projects, I created a website for local bakering shop, in which we sold cakes and cookies.
                </p>
                <br />
                <p>
                    2021, I decided to learn a javascript frontend framework, I went with <a className="text-blue-600" href="http://react.dev" target="_blank" rel="noopener noreferrer">Reactjs</a>, It's popular, has many awesome libraries and marketable.
                </p>
                <br />
                <p>
                    2022, Learnt Nodejs for Backend development and creating web APIs and I also interacted with different databases, mongoDB and Postgresql. <br/>
                    I joined the Google Developer Students Club. <br />
                    I went to a Developer Festival (DEVFEST) in Kisumu. <br />
                    I also participate in a HACKATHON which my team won and came 1st.
                </p>
                <br />
                <p>
                    2023, I kicked off with the HACKATHON incubation process and finally deployed our code to production. <br />
                    I connected with many friends and clients. <br />
                    I continued learninng more stacks and technologies. <br />
                    I started freelancing...
                </p>
                <br />
                <p>
                    I'm ready to be hired, if you are interested with my services, please mail me at  
                    <a className="ml-2 text-blue-600" href="mailto:imranmat254@gmail.com" target="_blank" rel="noopener noreferrer">imranmat254@gmail.com</a>
                </p>
            </div>
            
            <div className="flex text-2xl mt-8">
                <a href="http://github.com/imrany" title="my github profile" target="_blank" rel="noopener noreferrer">
                    <i className="ri-github-fill"></i>
                </a>
                <a className="ml-2" href="https://www.linkedin.com/in/imranmatano/" title="my linkedin profile" target="_blank" rel="noopener noreferrer">
                    <i className="ri-linkedin-fill"></i>
                </a>
                <a className="ml-2" href="http://wa.me/254734720752" title="Text me on whatsapp" target="_blank" rel="noopener noreferrer">
                    <i className="ri-whatsapp-fill"></i>
                </a>
                <a className="ml-2" href="https://www.instagram.com/imrany00/" title="my instagram profile" target="_blank" rel="noopener noreferrer">
                    <i className="ri-instagram-fill"></i>
                </a>
                <a className="ml-2" href="http://twitter.com/matano_imran" title="my twitter profile" target="_blank" rel="noopener noreferrer">
                    <i className="ri-twitter-fill"></i>
                </a>
                <a className="ml-2" href="mailto:imranmat254@gmail.com" title="my twitter profile" target="_blank" rel="noopener noreferrer">
                    <i className="ri-mail-fill"></i>
                </a>
            </div>
        </div>
    );
};

export default About;