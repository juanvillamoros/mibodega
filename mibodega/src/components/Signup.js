import React, {Component} from 'react';
import {connect} from 'react-redux';
import {register} from './actions/userActions';
class Signup extends Component {
  state = {
    username: "",
    password: "",
    avatar: "",
    bio: ""
  }
handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
 
  handleSubmit = event => {
    event.preventDefault()
    this.props.register(this.state)
  }
 
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Welcome proactive learner, please sign up below</h1>  
        <label>Username</label>         <input
          name='username'
          placeholder='Username'
          value={this.state.username}
          onChange={this.handleChange}
          /><br/>
 
        <label>Password</label>         <input
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
          /><br/>
 
        <label>Avatar</label>           <input
            name='avatar'
            placeholder='Avatar (URL)'
            value={this.state.avatar}
            onChange={this.handleChange}
            /><br/>
 
          <label>Bio</label>           <textarea
            name='bio'
            placeholder='Bio'
            value={this.state.bio}
            onChange={this.handleChange}
            /><br/>
 
        <input type='submit'/>
      </form>     )
  }
}
 
const mapDispatchToProps = dispatch => ({
  register: userInfo => dispatch(register(userInfo))
})
 
export default connect(null, mapDispatchToProps)(Signup);