import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getRecipes} from '../actions/recipes'
import Recipes from './Recipes'


class RecipesContainer extends PureComponent {

	componentDidMount = () => {
		this.props.getRecipes()
	}
	
	render() {
		return (
			<div className="recipes-container-wrapper">
        <Recipes recipes={this.props.recipes}/>
      </div>
		)}
}

const mapStateToProps = function (state) {
	return {
		recipes: state.recipes
	}
}

const mapDispatchToProps = {
	getRecipes
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)
