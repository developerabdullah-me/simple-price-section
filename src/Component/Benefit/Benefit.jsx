import React from 'react';
import {CheckCircleIcon} from '@heroicons/react/solid'
const Benefit = ({benefit}) => {
    // const [benefit]=props.benefit;
    return (
       <div className="">

 
           <h1 className='flex items-center'><CheckCircleIcon className="h-4 w-4  text-green-500"></CheckCircleIcon> {benefit}</h1> 
           </div>
    );
};

export default Benefit; 