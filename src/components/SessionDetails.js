import React from 'react';

const SessionDetails = props => {

    let { push, path, id, deleteSession, date, student, tutor, preAssessmentCompletionStatus, comment } = props;

    console.log(props)

    console.log(props.name)

    console.log(props.deleteSession)

    return (
        <>
            <div className="mediumPurpleText" className="session-details">

                <ul>
                <p>
                    {date}
                </p>
                <p>
                    {props.name}
                </p>
                <p>
                    {props.comment}
                </p>
                <p>
                     + 
                </p>
                <p>    
                    <button onClick={()=>props.deleteSession(props.id)}> - </button>
                </p>
                </ul>
            </div>
        </>
    );
}
 
export default SessionDetails;