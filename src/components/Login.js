import React from 'react';

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
        console.log("User clicked 'Submit' on login page")
        this.props.history.push('/')
    }
    
    render() { 
        return (
            <div className="Login">
                <h2 className="mediumPurpleText">Login</h2>  
                <form onSubmit={this.handleSubmit}>             
                    <input name="username" placeholder="Username" value= {this.state.username} onChange={this.handleChange}/><br></br>
                    <input type="password" name="password" placeholder="Password" value= {this.state.password} onChange={this.handleChange}/><br></br><br></br>
                    <button type="submit">Submit</button>
                </form>

            </div>
        )
    }
}

export default Login;