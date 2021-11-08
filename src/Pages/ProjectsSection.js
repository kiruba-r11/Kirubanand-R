import React from "react";
import Heading from "../Components/Heading";
import AchievementsTableDefinition from "../Components/AchievementsTableDefinition";
import MiniProjectsCardBox from "../Components/MiniProjectsCardBox";
import OpenSourceProjectsTableDefinition from "../Components/OpenSourceProjectsTableDefinition";
import headings from "../Data/Headings";

function ProjectsSection() {

    return (
        <div style={{ paddingTop: "100px" }} className="container" id="projects">
            <Heading
                key={headings[2].id}
                title={headings[2].title}
                subTitle={headings[2].subTitle}
            />

            <h1 style={{ fontWeight: 400}} className="mb-4">Open Source Contributions <a target="__blank" href="https://github.com/kiruba-r11/Open-Source-Contributions"><i className="fab fa-github"></i></a></h1>
            <OpenSourceProjectsTableDefinition />
            <h1 style={{ fontWeight: 400 , marginTop: "100px"}} className="mb-4">Achievements <a target="__blank" href="https://github.com/kiruba-r11/Achievements"><i className="fab fa-github"></i></a></h1>
            <AchievementsTableDefinition />
            <h1 style={{ fontWeight: 400 , marginTop: "100px"}} className="mb-5">Mini Projects <a target="__blank" href="https://github.com/kiruba-r11/Mini-Projects"><i className="fab fa-github"></i></a></h1>
            <MiniProjectsCardBox />

        </div>
    );
}

export default ProjectsSection;