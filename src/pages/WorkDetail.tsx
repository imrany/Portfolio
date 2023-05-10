// @flow strict
import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import { data } from '../components/data';
import { workItem } from '../types/types';

function WorkDetail() {
    const {slug}:any=useParams()
    let item:workItem={
        imgUrl: '',
        title: '',
        desc: ''
    };
    data.forEach((i,n)=>{
        if(n==slug){
            item=i
        }
    })
    console.log(item)
    return (
        <>
                <Link to="/">
                    <i className='ri-arrow-left-line fixed bg-black top-10 left-20 p-4 rounded-[100px] ri-lg text-white'></i>
                </Link>
            <div className="flex flex-col pt-20 pb-10 items-center h-[100vh]">
                <div className="flex">
                    <img src={item.imgUrl} alt={item.title} className='w-[100px]'/>
                    <p className='text-lg'>{item.title}</p>
                </div>
            </div>
        </>
    );
};

export default WorkDetail;