import React from "react";

function AchievementsTableData(props) {
    
      
    return (
        <tr>
            <td className="py-4 text-center align-middle">{props.sno}</td>
            <td className="py-4 align-middle"><h6 className="mb-0"><a target="__blank" href={props.certificateSrc} className="me-3"><i className="fab fa-github"></i></a>{props.contestName}</h6></td>
            <td className="py-4 text-center align-middle"><h6>{props.yearOfParticipation}</h6></td> 
            <td className="py-4 text-center align-middle"><h6>{props.position}</h6></td> 
            <td className="py-4 text-center align-middle"><h6>{props.noOfParticipants}</h6></td> 
            <td className="py-4 text-center align-middle"><h6>{props.conductedBy}</h6></td> 
            
        </tr>
    );
}

export default AchievementsTableData;