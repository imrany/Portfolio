// @flow strict


function About() {
    return (
        <div className="flex flex-col items-center my-10" id="about">
            <p className="text-4xl max-md:text-xl">About Me</p>
            <div className="text-base font-thin lg:w-[70vw] max-md:px-10 max-sm:px-10">
                <br/>
                <p>
                    I started my web development journey back in 2019, when I started on the basics of HTML, CSS and little javascript which I learnt on <a className="text-blue-600" href="http://w3school.com" target="_blank" rel="noopener noreferrer">W3School</a>.
                    I also took a 6 weeks android application development at Zalego institute in Nairobi during the December period.
                </p><br/>
                <p>
                    2020, this is the year when I started my own software development projects, I created a website for local bakering shop, in which we sold cakes and cookies.
                </p>
                <br />
                <p>
                    2021, I decided to learn a javascript frontend framework, I went with <a className="text-blue-600" href="http://react.org" target="_blank" rel="noopener noreferrer">Reactjs</a>, It's popular, has many awesome libraries and marketable.
                </p>
                <br />
                <p>
                    2022, Learnt Nodejs for Backend development and creating web APIs and I also interacted with different databases, mongoDB and Postgresql. <br/>
                    I joined the Google Developer Students Club. <br />
                    Went to a Developer Festival (DEVFEST) in Kisumu. <br />
                    I also participate in a HACKATHON which my team won and came 1st.
                </p>
                <br />
                <p>
                    2023, I started off with the HACKATHON incubation process and finally deployed our code to production. <br />
                    Connected with many friends and clients. <br />
                    Continued learninng more stacks and technologies.
                </p>
            </div>
        </div>
    );
};

export default About;