import React from 'react'
import {Link} from 'react-router-dom'

export default function recipes (props){
  return(
    <div id="recipes-list">
      <div className="container">
        <div className="row py-4">
          {props.recipes.map(recipe => 
            <Link to={`/recipes/${recipe.id}`} className=" col-sm-6 col-md-4 col-lg-3 my-3"
              style={{textDecoration: "none", color: "inherit"}} key={recipe.id}>
              <div className="card">
                <img className="img-fluid" src={recipe.imageURL} alt="recipe"/>
                <div className="card-body">
                  {recipe.name}
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}