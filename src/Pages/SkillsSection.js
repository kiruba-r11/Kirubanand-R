import React from 'react';
import SkillBox from '../Components/SkillBox';
import Heading from '../Components/Heading'
import skillsData from '../Data/SkillsData';
import headings from '../Data/Headings';
import '../Components/css/SkillBox.css'

function SkillsSection() {
    return (
        <div className="container my-5 pt-5" id="skills">
            <Heading 
                title={headings[1].title}
                subTitle={headings[1].subTitle}
            />
            <div className="row">
                {
                    skillsData.map(function(value) {
                        return (
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <SkillBox 
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