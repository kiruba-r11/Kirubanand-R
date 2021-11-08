import React from 'react';
import './css/Heading.css'

function Headings(props) {

    return (
        <>
            <h1 className="text-center text-sm-start heading-text">{props.title}</h1>
            <h1 className="text-shadow">{props.subTitle}</h1>
        </>
    );

}

export default Headings;