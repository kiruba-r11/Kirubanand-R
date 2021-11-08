import React from "react";
import achievementsData from "../Data/AchievementsData";
import AchievementsTableData from "./AchievementsTableData";

function AchievementsTableDefinition() {
    return (
        <>
            {
                achievementsData.map((data) => {
                    return (
                        <>
                            <div className="d-flex justify-content-center justify-content-sm-start align-items-center">
                                <h5 style={{ fontSize: "1.75rem", fontWeight: 400 }} className="nav-link mb-0">{data.name}</h5>
                            </div>
                            <div style={{marginBottom: "90px"}} className="container table-responsive-xl mt-5">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th style={{ minWidth: "75px" }} className="text-center" scope="col">S.No.</th>
                                            <th style={{ minWidth: "300px" }} scope="col">Contest Name</th>
                                            <th style={{ minWidth: "150px" }} className="text-center" scope="col">Year of Participation</th>
                                            <th style={{ minWidth: "120px" }} className="text-center" scope="col">Position</th>
                                            <th style={{ minWidth: "120px" }} className="text-center" scope="col">No. of Participants</th>
                                            <th style={{ minWidth: "325px" }} className="text-center" scope="col">Conducted By (College Name)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.contests.map((data) => {
                                                return (
                                                    <AchievementsTableData
                                                        key={data.id}
                                                        sno={data.id}
                                                        contestName={data.contestName}
                                                        yearOfParticipation={data.yearOfParticipation}
                                                        position={data.position}
                                                        noOfParticipants={data.noOfParticipants}
                                                        conductedBy={data.conductedBy}
                                                        certificateSrc={data.certificateSrc}
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

export default AchievementsTableDefinition;