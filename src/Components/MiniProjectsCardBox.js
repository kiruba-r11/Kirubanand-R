import React from 'react';
import MiniProjectsCardItem from './MiniProjectsCardItem';
import miniProjectsData from '../Data/MiniProjectsData';

function MiniProjectsCardBox() {
    return (
        <div className="row">
            {
                miniProjectsData.map((data) => {
                    return (
                        <MiniProjectsCardItem
                            key={data.id}
                            name={data.name}
                            projectSrc={data.repositorySrc}
                            projectType={data.projectType}
                            projectDesc={data.projectDesc}
                            techStack={data.techStack}
                            deploymentLink={data.deploymentLink}
                        />
                    );
                })
            }
        </div>
    );
}

export default MiniProjectsCardBox;