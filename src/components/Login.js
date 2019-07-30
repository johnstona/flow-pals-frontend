import React from 'react';

class Login extends React.Component {
  state = {
    username: '',
    password: ''
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
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text"
            value={this.state.username}
            onChange={this.handleChange}
            name="username"
            placeholder="Username"/>
          </div>
          <div class="mb-6">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" value={this.state.password}
            onChange={this.handleChange}
            type="password"
            name="password" placeholder="******************"/>
          </div>
          <div class="flex items-center justify-between">
              <button class="bg-blue hover:bg-blue-dark text-black font-bold py-2 px-4 rounded"
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