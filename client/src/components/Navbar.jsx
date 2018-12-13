import React, {Component} from 'react'
import { Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUsers} from '../actions/users'
import {logout} from '../actions/users'
import {userId} from '../jwt'
import logo from '../assets/logo.png'
import LoginForm from './LoginFormModal'
import SignupForm from './SignupFormModal'



class Navbar extends Component{

  componentDidMount = () => {
    this.props.getUsers()
  }

  handleLogout = () => {
    this.props.logout()
  }

  render(){
    return(
      <div className="navbar-wrapper">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top p-3" >   
          <img className= "img-fluid logo" src={logo} alt="cupcake logo"/>
          <Link to="/recipes">   
            <p className="navbar-brand ml-2 my-auto">My Recipes</p>
          </Link>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            { !this.props.user &&
              <ul className="navbar-nav ml-auto mr-5">
                <li className="nav-item mr-3">
                  <button className="btn btn-danger" 
                    data-toggle="modal" data-target="#loginModal">
                    Login
                  </button>
                </li>
                <li className="nav-item mr-3">
                  <button className="btn btn-danger" 
                    data-toggle="modal" data-target="#signupModal">
                    Sign Up
                  </button>
                </li>
              </ul>
            }

            {this.props.user &&
              <ul className="navbar-nav ml-auto mr-5">
                <li className="nav-item mr-3">
                  <button className="btn btn-danger" onClick={() => this.handleLogout()}>
                    Logout
                  </button>
                </li>
              </ul>
            }
          </div>
        </nav>

        <LoginForm/>

        <SignupForm/>

      </div>
    )
  }
}

const mapStateToProps = function (state) {
	return {
		events: state.events,
		authenticated: state.currentUser !== null,
		userId: state.currentUser && userId(state.currentUser.jwt),
    users: state.users,
    user: state.currentUser && state.users &&
    state.users[userId(state.currentUser.jwt)]
	}
}

const mapDispatchToProps = {
    getUsers,
    logout
	}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)