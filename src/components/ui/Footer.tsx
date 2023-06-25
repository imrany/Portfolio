// @flow strict
function Footer() {
    let date=new Date()
    const year=date.getFullYear()
    return (
        <footer className='flex justify-center items-center text-sm py-2 bg-black text-white'>
                {/* <div id='social-links' className='flex flex-col'>
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
                </div> */}
               <span>&copy; Imran matano | <a href="https://github.com/imrany" target="_blank" rel="noopenner noreferrer">Github</a> | {year}</span>
        </footer>
    );
};

export default Footer;