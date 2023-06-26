// @flow strict

function Skills() {
    let skills=[
        {
            title:"Tech Stacks",
            list:[
                "MERN - Reactjs, Express, Nodejs and MongoDB",
                "PERN - Reactjs, Express, Nodejs and Postgresql",
                "Reactjs and Firebase"
            ]
        },
        {
            title:"Frond End",
            list:[
                "Reactjs - Front end web development",
                "HTML, CSS and Vanilla js",
                "React native - A cross platform UI library for developing both android, IOS applications.",
                "Flutter - A cross platform UI library for developing both android, IOS applications."
            ]
        },
        {
            title:"Back End",
            list:[
                "Nodejs - Javascript runtime.",
                "Express - Javascript backend library.",
                "Django - Python backend web development framework.",
                "Actix web - Rust backend library."
            ]
        },
        {
            title:"Programming Languages",
            list:[
                "Javascript",
                "Rust lang",
                "Python"
            ]
        },
        {
            title:"Databases",
            list:[
                "MongoDB - No relational database",
                "Firestore - No relational database",
                "Postgresql - Relatonal database"
            ]
        }
    ]
    return (
        <div className="flex flex-col items-center my-10" id="skils">
            <p className="text-4xl max-md:text-xl">Skills</p>
            <div className="text-base font-thin lg:w-[70vw] max-md:px-8">
                <p>
                    I'm experienced in the following areas:
                </p>
                <div className="flex lg:grid lg:grid-cols-3 mt-6 lg:gap-5 max-md:flex-col max-md:items-center">
                    {skills.map((item,index)=>{
                        return (
                            <ul style={{listStyle:"circle"}} key={index} className="max-md:mt-6">
                            <p className="text-xl font-semibold">{item.title}</p>
                            {item.list.map((i,n)=>(
                                <li key={n}>{i}</li>
                            ))}
                        </ul>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Skills;