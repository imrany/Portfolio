// @flow strict
import axios from 'axios';
import * as React from 'react';

function Contact() {
    const handleSubmit=async(e:any)=>{
        e.preventDefault()
        try {
            let url=`http://`
            let body={

            }
            const response=await axios.post(url,body,{
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const parseRes=await response.data;
            console.log(parseRes)
            
        } catch (error:any) {
            alert(error.message)
        }
    }
    return (
        <div className='flex flex-col bg-gray-200 p-10'>
            <p className='text-2xl text-gray-500 text-center font-semibold mb-10'>Get in touch</p>
            <div className=""></div>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <label htmlFor="name">Enter Name</label>
                <input type="text" name="name" id="name" required/>
                <label htmlFor="email">Enter Email</label>
                <input type="email" name="email" id="email" required/>
            </form>
        </div>
    );
};

export default Contact;