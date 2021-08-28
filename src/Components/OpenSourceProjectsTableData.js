import React from "react";

function OpenSourceProjectsTableData(props) {
    const myCustomScrollbar = {
        position: "relative",
        height: "150px",
        overflow: "auto",
        display: "grid",
        placeItems: "center"
    }
      
    return (
        <tr>
            <td className="py-4 text-center align-middle">{props.sno}</td>
            <td className="py-4 align-middle"><h6>{props.repoName}</h6></td>
            <td className="py-4 text-center align-middle">{props.totalMergedPR}</td>
            <td className="py-4 text-center align-middle">
            <div style={myCustomScrollbar}>
                {
                    props.prSrc.map((data, index) => {
                        return (
                            <a target="__blank" className="d-block nav-link" href={data}>
                                {"PR - " + (index + 1)}
                            </a>
                        );
                    })
                }
            </div>
            </td>
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