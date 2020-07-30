import React from 'react';

const SessionItem = props => {
// class SessionItem extends React.Component {
    console.log(props)
    let { sessions } = props;
    // render(){
        return (
            <div className="mediumPurpleText" className="session-item">
                <h3>{sessions}</h3>
            </div>
        );
    };
// }
 
export default SessionItem;