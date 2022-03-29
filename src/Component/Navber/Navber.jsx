import React, { useState } from 'react';
import Link from '../Link/Link';
import {  MenuIcon, XIcon, } from '@heroicons/react/solid'
import './Navber.css'
const Navber = () => {

    const [open,setOpen]=useState(false);
    const rout=[
        {id:1, name:'Home',link:'/Details'},
        {id:2, name:'Shop',link:'/Shop'},
        {id:4, name:'Details',link:'/Details'},
        {id:5, name:'computers',link:'/computers'}
    ];

    return (
        <div>
    <div onClick={()=>setOpen(!open)} className="h-8 w-8 md:hidden cursor-pointer ">
     {open ? <XIcon className="cursor-pointer"></XIcon> : <MenuIcon className="cursor-pointer"></MenuIcon>}
    </div>
            <nav className="bg-indigo-300 p-5">
                <ul className={`md:flex justify-end   md:static absolute duration-700 ease-linear ${open ? 'top-6': 'top-[-125px]'}`}>
                 { 
                   rout.map(routs=> <Link routs={routs} ></Link>)
                    }
                </ul>
                
            </nav>
            <h1>simple price section </h1>
        </div>
    );
};

export default Navber;