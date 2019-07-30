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
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="mb-4">
          <div className="mb-4">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
              Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            placeholder="Name"/>
          </div>
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
          <div className="mb-6">
            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
              Confirm Password
            </label>
            <input className="shadow rounded w-full py-2 px-3 text-grey-darker mb-3" value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="password"
            name="confirmPassword" placeholder="******************"/>
          </div>
          <div className="flex items-center justify-between">
              <button className="bg-blue hover:bg-blue-dark text-black font-bold py-2 px-4 rounded"
              disabled={!this.validateForm()}
              type="submit">
              Sign Up
              </button>
          </div>
        </div>
      </form>
    );
  }


}

export default Signup