import React from 'react';
import ConnectBox from '../Components/ConnectBox';
import Heading from '../Components/Heading';
import headings from '../Data/Headings';
import "../Components/css/Connect.css"

function ConnectSection() {
    return (
        <div style={{paddingTop: "100px"}} className="mb-5 container" id="connect">
            <Heading
                key={headings[3].id}
                title={headings[3].title}
                subTitle={headings[3].subTitle}
            />
            <ConnectBox />
        </div>
    );
}

export default ConnectSection;