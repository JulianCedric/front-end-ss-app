import React from 'react';

const SessionDetails = props => {

    let { push, path, id, date, student, preAssessmentCompletionStatus, comment } = props;



    return (
        <>
        <div className="mediumPurpleText" className="session-details">

        </div>


            <tr>
                <td>{date}</td>
                <td>{student}</td>
                <td>{comment}</td>
                <td> + </td>
                <td onClick={this.handleClick}> - </td>
                {/* <button onClick={() => push(`${props.match.path}/${id}`)}>Home</button>  */}
            </tr>
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