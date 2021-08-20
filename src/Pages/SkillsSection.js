import React from 'react';
import SkillBox from '../Components/SkillBox';
import Heading from '../Components/Heading'
import skillsData from '../Data/SkillsData';
import headings from '../Data/Headings';
import '../Components/css/SkillBox.css'

function SkillsSection() {
    return (
        <div style={{paddingTop: "100px"}} className="container" id="skills">
            <Heading
                key={headings[1].id}
                title={headings[1].title}
                subTitle={headings[1].subTitle}
            />
            <div className="row">
                {
                    skillsData.map(function (value) {
                        return (
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <SkillBox
                                    key={value.id}
                                    name={value.name}
                                    imageSrc={value.imageSrc}
                                />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default SkillsSection;