import {LOAD_RECIPES} from '../actions/recipes'

export default function (state = {}, action={}){
  switch (action.type){
    case LOAD_RECIPES:
      return {...state = action.payload}
    default:
      return state
  }
}