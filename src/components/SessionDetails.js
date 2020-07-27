import React from 'react';

const SessionDetails = props => {

    let { push, id, date, preAssessmentCompletionStatus, comment } = props;

    return (
        <div className="mediumPurpleText" className="session-details">
            <h2 className="mediumPurpleText">Session Info:</h2>
            <div>
                <p>Date: {date}</p>
                <p>Pre-Assessment Completed? </p>
                <p>Notes: </p>
                <p>{comment}</p>
                <button onClick={() => push(`${props.match.path}/${id}`)}>Home</button>
            </div>
        </div>
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