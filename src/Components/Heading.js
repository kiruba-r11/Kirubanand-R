import React from 'react';
import './css/Heading.css'

function Headings(props) {

    return (
        <>
            <h1 className="heading-text">{props.title}</h1>
            <h1 className="text-shadow">{props.subTitle}</h1>
        </>
    );

}

export default Headings;