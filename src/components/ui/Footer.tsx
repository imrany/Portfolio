// @flow strict
function Footer() {
    let date=new Date()
    const year=date.getFullYear()
    return (
        <footer className='flex justify-center items-center text-sm py-2 mt-20 bg-black text-white'>
            <span>Copyright &copy; {year}. All rights reserved</span>
        </footer>
    );
};

export default Footer;