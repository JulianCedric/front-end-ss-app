import React from 'react';

class Login extends React.Component {
    state = {
        isNewUser: false,
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
        this.props.changePageShown('home')
    }
    
    render() { 
        return (
            <div className="Login">
                
                <form className="vertical-flex" onSubmit={this.handleSubmit}>
                    
                    <h2 className="mediumPurpleText">Login</h2>
                    
                    <input name="username" placeholder="Username" value= {this.state.username} onChange={this.handleChange}/><br></br>
                    <input type="password" name="password" placeholder="Password" value= {this.state.password} onChange={this.handleChange}/><br></br><br></br>
                    
                    <button type="submit">Submit</button>

            </form>

            </div>
        )
    }
}

export default Login;