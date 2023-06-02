// @flow strict
function Footer() {
    let date=new Date()
    const year=date.getFullYear()
    return (
        <footer className='bg-black text-white py-5 px-2'>
            <div className="flex sm:justify-around max-sm:flex-col max-sm:mx-[20px] text-lg my-8" id='links'>
                <div id='social-links' className='flex flex-col'>
                    <a className='hover:text-green-500' href='https://wa.me/254734720752' target='_blank' rel='noopener noreferrer'>
                        <i className="ri-whatsapp-fill mr-2"></i>
                        Whatsapp
                    </a>
                    <a className='hover:text-red-400' href='https://instagram.com/imrany00' target='_blank' rel="noopener noreferrer">
                        <i className="ri-instagram-fill mr-2"></i>
                        Instagram
                    </a>
                    <a className='hover:text-purple-400' href='https://twitter.com/matano_imran' target='_blank' rel="noopener noreferrer">
                        <i className="ri-twitter-fill mr-2"></i>
                        Twitter
                    </a>
                    <a className='hover:text-red-500' href='mailto:imranmat254@gmail.com' target='_blank' rel="noopener noreferrer">
                        <i className="ri-mail-fill mr-2"></i>
                        Gmail
                    </a>
                    <a className='hover:text-blue-500' href="tel:+254734720752" target='_blank' rel='noopener noreferrer'>
                        <i className="ri-phone-fill mr-2"></i>
                        Phone
                    </a>
                </div>

                <div className="flex flex-col max-sm:mt-8" id='quick-links'>
                    <a href="https://github.com/imrany" target='_blank' rel='noopener noreferrer noreferrer' className='hover:text-yellow-500'>My Contributions</a>
                    <a href='tel:+254734720752' target='_blank' rel='noopener noreferrer noreferrer' className='hover:text-yellow-500'>Get in touch</a>
                    <a href='#apps' className='hover:text-yellow-500'>Apps</a>

                </div>
            </div>

            <div className="text-center" id='copy-write'>
                &copy;{year}
            </div>
        </footer>
    );
};

export default Footer;