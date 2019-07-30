import React from 'react';
import API from '../adapters/API';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
  }

  validateForm() {
    return (
      this.state.username.length > 0 &&
      this.state.password.length > 0
    );
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.login(this.state)
    this.setState({
      username: '',
      password: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="flex">
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
            name="username"
          />
           <input
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            name="password"
          />
        <button
          disabled={!this.validateForm()}
          type="submit"
        >Log In</button>
      </form>
    );
  }


}

export default Login
