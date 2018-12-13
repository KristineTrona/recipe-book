import React, {PureComponent} from 'react'
import {connect} from 'react-redux'


class RecipesContainer extends PureComponent {
	
	render() {
		return (
			<div className="recipes-container-wrapper">
        Test
      </div>
		)}
}

const mapStateToProps = function (state) {
	return {

	}
}

const mapDispatchToProps = {
	}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)
