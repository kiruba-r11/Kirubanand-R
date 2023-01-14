import React from "react";

function OpenSourceProjectsTableData(props) {
      
    return (
        <tr>
            <td className="py-4 text-center align-middle">{props.sno}</td>
            <td className="py-4 align-middle"><h6 className="mb-0"><a target="__blank" href={props.repoSrc} className="me-3"><i className="fab fa-github"></i></a>{props.repoName}</h6></td>
            <td className="py-4 text-center align-middle"><h6>{props.totalMergedPR}</h6></td> 
            <td className="py-4 text-center align-middle">
                {
                    props.techStack.map((data) => {
                        return (
                            <p style={{ backgroundColor: "#007BFF", fontWeight: 600 }} className="m-1 badge d-inline-block">{data}</p>
                        );
                    })
                }
            </td>
        </tr>
    );
}

export default OpenSourceProjectsTableData;