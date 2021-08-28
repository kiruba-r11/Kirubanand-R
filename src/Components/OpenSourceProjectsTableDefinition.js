import React from "react";
import openSourceData from "../Data/OpenSourceData";
import OpenSourceProjectsTableData from "./OpenSourceProjectsTableData";

function OpenSourceProjectsTableDefinition() {
    return (
        <>
            {
                openSourceData.map((data) => {
                    return (
                        <>
                            <div className="d-flex justify-content-center justify-content-sm-start align-items-center">
                                <h5 style={{ fontSize: "1.75rem", fontWeight: 400 }} className="nav-link mb-0">{data.name}</h5>
                                <span style={{ backgroundColor: "#007BFF", fontWeight: 600, fontSize: "0.8rem" }} className="badge">{data.timeline}</span>
                            </div>
                            <div className="container table-responsive-lg my-5">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th style={{ minWidth: "75px" }} className="text-center" scope="col">S.No.</th>
                                            <th style={{ minWidth: "400px" }} scope="col">Repository Name</th>
                                            <th style={{ minWidth: "200px" }} className="text-center" scope="col">Total Merged PRs</th>
                                            <th style={{ minWidth: "120px" }} className="text-center" scope="col">Merged PRs</th>
                                            <th style={{ minWidth: "120px" }} className="text-center" scope="col">Tech Stack</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.projects.map((data) => {
                                                return (
                                                    <OpenSourceProjectsTableData
                                                        key={data.id}
                                                        sno={data.id}
                                                        repoName={data.repositoryName}
                                                        repoSrc={data.repositorySrc}
                                                        totalMergedPR={data.totalMergedPR}
                                                        prSrc={data.prSrc}
                                                        techStack={data.techStack}
                                                    />
                                                );
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </>
                    );
                })
            }
        </>
    );
}

export default OpenSourceProjectsTableDefinition;