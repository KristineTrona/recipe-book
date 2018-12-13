import { combineReducers } from 'redux'
import recipes from './recipes'
import users from './users'
import login from './login'
import signup from './signup'
import currentUser from './currentUser'

export default combineReducers({
  recipes,
  users,
  currentUser,
  login,
  signup
})