import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {login} from '../actions/users'
import $ from 'jquery'

class LoginForm extends PureComponent {
	state = {}

	handleSubmit = (event) => {
		event.preventDefault()
    this.props.login(this.state.email, this.state.password)

    $('#loginModal').modal('toggle')
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {
		return (
      <div className="modal" id="loginModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Login</h5>
              <button className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
			        <form className="login-form" onSubmit={this.handleSubmit}>
			        	<div>
			        		<label htmlFor="email">Email:</label><br/>
			        		<input className="form-control" type="email" name="email" value={
			        			this.state.email || ''
			        		} onChange={ this.handleChange } />
			        	</div>
                
			        	<div>
			        		<label htmlFor="password">Password:</label><br/>
			        		<input className="form-control" type="password" name="password" value={
			        			this.state.password || ''
			        		} onChange={ this.handleChange } />
			        	</div>
                {
                  this.props.login.error &&
                  <div>
                    {this.props.login.error}
                  </div>
                }
                
			        	<button className="btn btn-primary btn-block mt-4" type="submit">Login</button>
			        </form>
            </div>
            <div className="text-center mb-4 modal-bottom-text">
              Dont have an account yet? 
              <div className="btn btn-outline-primary btn-sm ml-2" data-toggle="modal" data-dismiss="modal" data-target="#signupModal">Sign Up</div>
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
		currentUser: state.currentUser,
    error: state.login.error
	}
}

export default connect(mapStateToProps, {login})(LoginForm)