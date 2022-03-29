import React from 'react';
import PricingOptions from '../PricingOptions/PricingOptions';
const priceOptions=[
    {name:'free',price:0,id:1, benefits:[
        'lifetime free','unlimited deals','localized deals','fantastic deals','craze deals']
},
    {name:'regular',price:20,id:2, benefits:[
        'lifetime regular','unlimited deals','localized deals','fantastic deals','craze deals']},
    {name:'premium',price:99,id:3, benefits:[
        'lifetime premium','unlimited deals','localized deals','fantastic deals','craze deals']},
    {name:'golden',price:1001,id:4, benefits:[
        'lifetime golden','unlimited deals','localized deals','fantastic deals','craze deals']},
]
const Pricing = () => {
    return (
        <div className="bg-indigo-300 mt-14 p-14">
            <h1 className="font-mono text-5xl text-white ">Best Deal of the town</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam magnam necessitatibus consequuntur, nesciunt modi mollitia odio nemo adipisci iure quibusdam.</p>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-x-5 ">
        {
            priceOptions.map(option => <PricingOptions option={option} key={option.id}></PricingOptions>)
        }
        </div>
        </div>
    );
};

export default Pricing;