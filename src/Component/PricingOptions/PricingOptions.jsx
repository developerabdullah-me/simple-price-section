
import React from 'react';
import Benefit from '../Benefit/Benefit';
import {ArrowCircleRightIcon} from '@heroicons/react/solid'
const PricingOptions = (props) => {
    const {name,price,benefits}=props.option;
    return (
        <div className="bg-white p-5 border-4 mt-14">
            <h1 className="text-5xl bg-indigo-300 p-2 rounded-lg">{name}</h1>
            <h1 className="text-3xl">{price}<span>/mo</span></h1>
            <div className="">
                <h1 className="text-3xl font-italic font-bold">Benefits</h1>
                {
                    benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
                }
                <button className='bg-amber-400 px-5 py-3 w-full flex items-center text-white justify-center hover:text-slate-200 hover:font-bold'>Buy Now <ArrowCircleRightIcon className="h-8 w-8  ml-2"></ArrowCircleRightIcon></button>
            </div>
        </div>
    );
};

export default PricingOptions;