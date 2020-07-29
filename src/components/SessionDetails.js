import React from 'react';

const SessionDetails = props => {

    let { push, path, id, deleteSession, date, student, tutor, preAssessmentCompletionStatus, comment } = props;

    console.log(props)

    console.log(props.name)

    console.log(props.deleteSession)

    return (
        <>
            <div className="mediumPurpleText" className="session-details">
                <tr>
                    <td>{date}</td>
                </tr>
                <tr>
                    <td>{props.name}</td>
                </tr>
                <tr>
                    <td>{props.comment}</td>
                </tr>
                <tr>
                    <td> + </td>
                </tr>
                <tr>    
                    <button onClick={()=>props.deleteSession(props.id)}> - </button>
                </tr>
            </div>
        </>
    );
}
 
export default SessionDetails;

// class SessionDetails extends React.Component {
//     render() { 
//         return (
//             <div className="mediumPurpleText" className="session">
//                 <h3>Session Info:</h3>
//                 <div>
                    
//                     <p>Date: {this.props.date}</p>
    
//                     <p>Time: </p>
    
//                     <p>Student: </p>
    
//                     <p>School: </p>
    
//                     <p>Parent: </p>
    
//                     {/* <p>Your Notes: {comment}</p> */}
    
//                 </div>
//             </div>
//         );
//     }
// }
 
// export default SessionDetails;