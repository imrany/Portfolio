// @flow strict
function Footer() {
    let date=new Date()
    const year=date.getFullYear()
    return (
        <footer className='flex justify-center items-center text-sm py-2 mt-20 bg-black text-white'>
            <span>&copy; Imran matano | <a href="https://github.com/imrany" target="_blank" rel="noopenner noreferrer">Github</a> | {year}</span>
        </footer>
    );
};

export default Footer;