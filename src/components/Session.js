import React from 'react';

const SessionDetails = props => {

    // Sample session object:
  // { "sessions": [
  //   {
  //       "id": 1,
  //       "tutorId": 1,
  //       "studentId": 1,
  //       "date": "",
  //       "completionStatus": false,
  //       "comment": ""
  //   }
  // ]}

    // const { id, tutorId, studentId, date, completionStatus } = props;

    return (
        <div className="mediumPurpleText" className="session">
            <h3>Session Info:</h3>
            <div>
                <p>Date: </p>
                <p>Student Info: </p>
                <p>Page Under Construction</p>
                {/* <p>Your Notes: {comment}</p> */}
            </div>
        </div>
    )
}

export default SessionDetails;