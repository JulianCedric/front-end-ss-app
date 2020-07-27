import React from 'react';
import { Route, Switch} from 'react-router-dom';

class Login extends React.Component {
    state = {
        username: "",
        password: ""
    }

    handleChange = e => {
        this.setState(
            {[e.target.name] : e.target.value},
        )
    }

    handleSubmit = e => {
        e.preventDefault()
        const { username, password } = this.state;
    }
    
    render() { 
        return (
            <div className="Login">
                <h2 className="mediumPurpleText">Login</h2>               
                <input name="username" placeholder="Username" value= {this.state.username} onChange={this.handleChange}/><br></br>
                <input type="password" name="password" placeholder="Password" value= {this.state.password} onChange={this.handleChange}/><br></br><br></br>
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
                {/* <Switch>
                    <Route exact path="/" render={() => <Home />}/>
                </Switch> */}
            </div>
        )
    }
}

export default Login;