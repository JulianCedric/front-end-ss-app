// 

import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Sessions from './Sessions';
import NewSessionForm from './NewSessionForm';

const API = "http://localhost:3001/api/v1/sessions.json"

class Home extends React.Component {
    // state moved to App.js re: NewSessionForm (redirect)

    componentDidMount(){
        fetch(API)
        .then(resp => resp.json())
        .then(sessions => this.props.x)
    }

    // getData(){
    //     return this.componentDidMount()
    // }

    render() { 
        // this.getData()
        return (
            <div className="home">
                <h2 className="mediumPurpleText">Home</h2>
                <Switch> 
                    <Route exact path="/sessions/new" render={(props) => <NewSessionForm {...props} />}/>
                    <Route exact path="/sessions" render={(routerProps, props) => <Sessions sessions={this.props.x} {...routerProps} {...props} />}/>
                </Switch>
            </div>
        )
    }
}
 
export default Home;