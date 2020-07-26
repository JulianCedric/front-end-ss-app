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
                    
                    <h3>Login</h3>
                    
                    <input name="name" placeholder="Name" value= {this.state.name} onChange={this.handleChange}/>                     
                    <input name="username" placeholder="Username" value= {this.state.username} onChange={this.handleChange}/>
                    <input type="password" name="password" placeholder="Password" value= {this.state.password} onChange={this.handleChange}/>
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" value= {this.state.confirmPassword} onChange={this.handleChange}/>
                    
                    <button type="submit">Submit</button>

            </form>

            </div>
        )
    }
}
 
export default Login;