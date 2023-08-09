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
        <nav role='navigator' className='flex sm:pl-10 md:py-6 max-sm:py-3 max-sm:none border-b md:px-10'>
            <ul className='flex justify-between w-[100vw] text-lg' id='desktop-nav'>
                <li className='font-bold text-2xl'>
                    <Link to={path} className='text-blue-600'>
                        {name}.
                    </Link>
                </li>
                <div className="flex">
                    <li>
                        <a href='#about' className='hover:text-yellow-500 ml-4'>About us</a>
                    </li>
                    <li>
                        <a href='#services' className='hover:text-yellow-500 ml-4'>Services</a>
                    </li>
                    <li>
                        <a href='#projects' className='hover:text-yellow-500 ml-4'>Our work</a>
                    </li>
                    <li className='mx-4'>
                        <a className='mt-9 text-base border-black border-[1px] py-2 px-7' href='mailto:imranmat254@gmail.com' target='_blank' rel='noopener'>
                            Email
                        </a>
                    </li>
                </div>
            </ul>    

            <div id='mobile-nav' className='w-[100vw]'>
               <div className="flex justify-between px-5">
                    <ul>
                        <li className='font-bold text-xl'>
                            <Link to={path} className='text-blue-600'>
                                {name}.
                            </Link>
                        </li>
                    </ul>
                    <div id='menu-icon'>
                        <button onClick={openMenu}>
                            <i className='ri-menu-fill ri-xl'></i>
                        </button>
                    </div>
               </div>

                <ul id='mobile-menu' onClick={closeMenu} className='z-[1000] fixed bg-white right-0 top-0 left-0 bottom-0 font-thin flex flex-col h-[100vh] justify-center items-center'>
                    <li>
                        <a href='#about' className='hover:text-yellow-500 text-lg my-6'>About us</a>
                    </li>
                    <li>
                        <a href='#services' className='hover:text-yellow-500 text-lg my-6'>Services</a>
                    </li>
                    <li>
                        <a href='#projects' className='hover:text-yellow-500 text-lg my-6'>Our work</a>
                    </li>
                    <li className='mt-6'>
                        <a className='text-base border-[1px] py-2 px-7 border-black' href='mailto:imranmat254@gmail.com' target='_blank' rel='noopener'>
                            Email
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;