import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {signup} from '../actions/users'
import $ from 'jquery'

class SignupForm extends PureComponent {
  state = {}

	handleSubmit = (event) => {
		event.preventDefault()
    this.props.postSignup(this.state.email, this.state.username, this.state.password)

		$('#signupModal').modal('toggle')
    $('#loginModal').modal('toggle')

    event.target.reset()
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {
    
		return (
      <div className="modal" id="signupModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Sign Up</h5>
            <button className="close" data-dismiss="modal">&times;</button>
          </div>
          <div className="modal-body">
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
				      <div>
				      	<label htmlFor="email">Email:</label><br/>
				      	<input className="form-control" type="email" name="email" value={
				      		this.state.email || ''
				      	} onChange={ this.handleChange } />
				      </div>
              <div>
				      	<label htmlFor="username">Username:</label><br/>
				      	<input className="form-control"  type="username" name="username" value={
				      		this.state.username || ''
				      	} onChange={ this.handleChange } />
				      </div>
				      <div>
				      	<label htmlFor="password">Password:</label><br/>
				      	<input className="form-control"  type="password" name="password" value={
				      		this.state.password || ''
				      	} onChange={ this.handleChange } />
				      </div>
				      <div>
				      	<label htmlFor="confirmPassword">Confirm password:</label><br/>
				      	<input className="form-control"  type="password" name="confirmPassword" value={
				      		this.state.confirmPassword || ''
				      	} onChange={ this.handleChange } />
				      </div>
				      {
				      	this.state.password &&
				      	this.state.confirmPassword &&
				      	this.state.password !== this.state.confirmPassword &&
				      	<p style={{color:'red'}}>The passwords do not match!</p>
				      }
				      <button className="btn btn-primary btn-block mt-4" type="submit">Sign Up</button>
			      </form>
          </div>
          <div className="text-center mb-4 modal-bottom-text">
            Already have an account?
            <div className="btn btn-outline-primary btn-sm ml-2" data-toggle="modal" data-dismiss="modal" data-target="#loginModal">Log in</div>
            <hr/>
          </div>
        </div>
      </div>
    </div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
    signup: state.signup
	}
}

const mapDispatchToProps = {
    postSignup: signup
	}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)