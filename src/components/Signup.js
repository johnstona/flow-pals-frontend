import React from 'react'

class Signup extends React.Component {
  state = {
    name: '',
    username: '',
    password: '',
    confirmPassword: ''
  }

  validateForm() {
    return (
      this.state.username.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.newUser(this.state)
    this.setState({
      name: '',
      username: '',
      password: '',
      confirmPassword: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          />
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
          <input
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="password"
            name="confirmPassword"
          />
        <button
          block
          bsSize="large"
          disabled={!this.validateForm()}
          type="submit"
        >Sign Up </button>
      </form>
    );
  }


}

export default Signup