// @flow strict
import * as React from 'react';
import { GlobalContext } from '../../GlobalContext';
import { Link } from 'react-router-dom';

function Header() {
    const {name}=React.useContext(GlobalContext)
    return (
        <nav role='navigator' className='flex sm:pl-10 py-4'>
            <ul className='flex justify-around w-[100vw] text-lg text-gray-500'>
                <li className='font-bold text-xl text-green-500'>
                    <Link to="/">{name}</Link>
                </li>
                <li>
                    <Link to="/work">Work</Link>
                </li>
                <li>
                    <Link to="/contact">Get in touch</Link>
                </li>

                <li>
                    <a className='mt-9 text-base bg-black text-white border-none py-2 px-7 rounded-[50px]' href='mailto:imranmat254@gmail.com' target='_blank' rel='noopener'>
                        Email
                    </a>
                </li>
            </ul>    
        </nav>
    );
};

export default Header;