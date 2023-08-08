// @flow strict

function Skills() {
    let skills=[
        {
            question:"How long does it take to build a website?",
            answer:"The time depends on the hours dedicated on build the website. We take 2 to 3 days to build a website."
        },
        {
            question:"Do i need a Domain for my website?",
            answer:"Yes, you do need to register domain name for your website."
        },
        {
            question:"How much does a website cost to make?",
            answer:"It depends with the company or developer. We start from Ksh 15,000 for small websites to Kes 150,000 for large web apps."
        },
        {
            question:"How do i place my order?",
            answer:"Please place your order via imranmat254@gmail.com"
        }
    ]
    return (
        <div className="flex flex-col items-center my-10" id="skills">
            <p className="text-4xl max-md:text-xl font-semibold text-gray-700">Frequently ask questions</p>
            <div className="lg:w-[70vw] max-md:px-8">
                <div className="flex lg:grid lg:grid-cols-3 mt-10 lg:gap-5 max-md:flex-col max-md:items-center">
                    {skills.map((item,index)=>{
                        return (
                            <div style={{listStyle:"circle"}} key={index} className="max-md:mt-6">
                                <p className="font-semibold">{item.question}</p>
                                <p className="mt-2">{item.answer}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Skills;