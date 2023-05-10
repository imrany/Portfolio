// @flow strict
import * as React from 'react';
import { GlobalContext } from '../../GlobalContext';
import { Link } from 'react-router-dom';

function Header() {
    const {name, path}=React.useContext(GlobalContext)
    function openMenu(){
        const mobileMenu=document.getElementById("mobile-menu") as HTMLUListElement
        mobileMenu.style.display='flex'
    }
    function closeMenu(){
        const mobileMenu=document.getElementById("mobile-menu") as HTMLUListElement
        mobileMenu.style.display="none"
    }
    return (
        <nav role='navigator' className='flex sm:pl-10 py-6 max-sm:none'>
            <ul className='flex justify-around w-[100vw] text-lg text-gray-500' id='desktop-nav'>
                <li className='font-bold text-xl text-green-500'>
                    <Link to={path}>{name}</Link>
                </li>
                <li>
                    <a href='#work' className='hover:text-yellow-500'>Work</a>
                </li>
                <li>
                    <a href='tel:+254734720752' target='_blank' rel='noopener noreferrer' className='hover:text-yellow-500'>Get in touch</a>
                </li>
                <li>
                    <a href="https://github.com/imrany" className='hover:text-yellow-500' target='_blank' rel="noopener">My Contributions</a>
                </li>

                <li>
                    <a className='mt-9 text-base bg-black text-white border-none py-2 px-7 rounded-[50px]' href='mailto:imranmat254@gmail.com' target='_blank' rel='noopener'>
                        Email
                    </a>
                </li>
            </ul>    

            <div id='mobile-nav' className='w-[100vw]'>
                <div className="pl-[80vw]" id='menu-icon'>
                    <button onClick={openMenu}>
                        menu
                    </button>
                </div>

                <ul id='mobile-menu' onClick={closeMenu} className='z-[1000] fixed bg-white right-0 top-0 left-0 bottom-0 flex flex-col h-[100vh] justify-center items-center'>
                    <li className='font-bold text-xl text-green-500'>
                        <Link to={path}>{name}</Link>
                    </li>
                    <li>
                        <a href='#work' className='hover:text-yellow-500 text-lg my-6'>Work</a>
                    </li>
                    <li>
                        <a href="tel:+254734720752" target='_blank' rel="noopener noreferrer" className='hover:text-yellow-500 text-lg'>Get in touch</a>
                    </li>
                    <li>
                        <a href="https://github.com/imrany" className='hover:text-yellow-500 text-lg my-6' target='_blank' rel="noopener noreferrer">My Contributions</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;