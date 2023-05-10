// @flow strict
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate=useNavigate()
    const BackHome=()=>{
        navigate('/')
    }
    return (
        <div className='flex flex-col justify-center text-center items-center h-[100vh]'>
            <p className='text-2xl'>Ooh, currently this page is not available.</p>
            <button onClick={BackHome} className='mt-9 text-base font-bold bg-black text-white border-none py-2 px-7 rounded-[50px]'>
                Home
            </button>
        </div>
    );
}; 

export default NotFound;