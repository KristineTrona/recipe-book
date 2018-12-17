import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getRecipes} from '../actions/recipes'


class RecipesContainer extends PureComponent {

	componentDidMount = () => {
		this.props.getRecipes()
	}
	
	render() {
		return (
			<div className="recipes-container-wrapper">
        Test
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
