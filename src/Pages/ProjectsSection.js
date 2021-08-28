import React from "react";
import Heading from "../Components/Heading";
import OpenSourceProjectsTableDefinition from "../Components/OpenSourceProjectsTableDefinition";
import headings from "../Data/Headings";

function ProjectsSection() {

    return(
        <div style={{paddingTop: "100px"}} className="container" id="projects">
            <Heading
                key={headings[2].id}
                title={headings[2].title}
                subTitle={headings[2].subTitle}
            />
            <h1 style={{fontWeight: 400}} className="mb-5">Open Source Contributions <a target="__blank" href="https://github.com/kiruba-r11/Open-Source-Contributions"><i class="fab fa-github"></i></a></h1>
            <OpenSourceProjectsTableDefinition />
        </div>
    );
}

export default ProjectsSection;