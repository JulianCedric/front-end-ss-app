import React from 'react';

const SessionItem = props => {

    let { push, path, id, deleteSession, date, student, tutor, preAssessmentCompletionStatus, comment } = props;

    console.log(props.id)

    return (
        <>
            <div className="mediumPurpleText" className="session-details">
{/*  */}
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
                    {props.name === "session" && <button onClick={()=>props.updateStatus(id)}> + </button>}
                </p>
                <p>    
                    {props.name === "session" && <button onClick={()=>props.deleteSession(id)}> - </button>}
                </p>
                </ul>
            </div>
        </>
    );
}
 
export default SessionItem;