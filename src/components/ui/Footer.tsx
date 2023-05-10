// @flow strict

import * as React from 'react';

function Footer() {
    let date=new Date()
    const year=date.getFullYear()
    return (
        <footer className='bg-black text-white py-5 mt-10 px-2'>
            <div className="copy-write">
                &copy;{year}
            </div>
        </footer>
    );
};

export default Footer;