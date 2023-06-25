// @flow strict

function Skills() {
    return (
        <div className="flex flex-col items-center my-10" id="skils">
            <p className="text-4xl max-md:text-xl">Skills</p>
            <div className="text-base font-thin lg:w-[70vw] max-md:px-10 max-sm:px-8">
                <p>
                    I'm experienced in the following areas:
                </p>
                <div className="flex lg:grid lg:grid-cols-3 mt-6 max-md:flex-col max-md:items-center">
                    <ul>
                        <p className="text-xl font-semibold">Tech Stacks</p>
                        <li>MERN - Reacjs, Express, Nodejs and MongoDB</li>
                        <li>PERN - Reacjs, Express, Nodejs and Postgresql</li>
                    </ul>
                    <ul className="ml-10 max-md:mt-6">
                        <p className="text-xl font-semibold">Frond End</p>
                        <li>Reactjs - Front end web development</li>
                        <li>HTML, CSS and Vanilla js</li>
                    </ul>
                    <ul className="ml-10 max-md:mt-6">
                        <p className="text-xl font-semibold">Back End</p>
                        <li>Nodejs - Back end web development</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;