import { JsonController, Get, Param, Post, HttpCode, Authorized, BodyParam } from 'routing-controllers'
import Recipe from './entity';


@JsonController()
export default class RecipesController {
    
  @Get('/recipes/:id')
  getEvent( @Param('id') id: number){
    return Recipe.findOne(id)
  }


  @Get('/recipes')
  async getAllRecipes () {
    const recipes = await Recipe.find()
    return { recipes }
  }

  @Authorized()
  @Post('/recipes')
  @HttpCode(201)
  createRecipe(
    @BodyParam("name") name: string,
    @BodyParam("servings") servings: number,
    @BodyParam("time") time: string,
    @BodyParam("instructions") instructions: string[],
    @BodyParam("imageURL") imageURL: string
  ) {

    const newRecipe = new Recipe
    newRecipe.name = name
    newRecipe.servings = servings
    newRecipe.time = time
    newRecipe.instructions = instructions
    newRecipe.imageURL = imageURL

    return newRecipe.save()
  }

}
