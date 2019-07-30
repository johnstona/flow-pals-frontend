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
      <form onSubmit={this.handleSubmit}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text"
            value={this.state.username}
            onChange={this.handleChange}
            name="username"
            placeholder="Username"/>
          </div>
          <div className="mb-6">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow rounded w-full py-2 px-3 text-grey-darker mb-3" value={this.state.password}
            onChange={this.handleChange}
            type="password"
            name="password" placeholder="******************"/>
          </div>
          <div className="flex items-center justify-between">
              <button className="bg-blue hover:bg-blue-dark text-black font-bold py-2 px-4 rounded"
              type="submit">
              Sign In
              </button>
          </div>
        </div>
      </form>
    ); 
  }


}

export default Login
