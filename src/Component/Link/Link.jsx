import React from 'react';

const Link = (props) => {
    const {name,link}=props.routs;
    return (
        <div>
          <li className="mx-3">  <a href={link}>{name}</a></li>
        
        </div>
    );
};

export default Link;