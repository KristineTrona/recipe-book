import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const LOAD_RECIPES = 'LOAD_RECIPES'


const loadRecipes = (recipes) => ({
  type: LOAD_RECIPES,
  payload: recipes.recipes
})

export const getRecipes = () => (dispatch) => {
  request
    .get(`${baseUrl}/recipes`)
    .then(result => dispatch(loadRecipes(result.body)))
    .catch(err => console.error(err))
}