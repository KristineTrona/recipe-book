import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, Index, ManyToOne} from 'typeorm'
import { IsString} from '../../node_modules/class-validator';
import Ingredient from '../ingredients/entity'
import Appliance from '../appliances/entity'

@Entity()
export default class Recipe extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text')
  name: string

  @Column('simple-array')
  instructions: string[]

  @IsString()
  @Column('text')
  imageURL: string

  @OneToMany(_ => RecipeIngredient, recipeIngredient => recipeIngredient.recipe, {eager: true})
  recipeIngredient: RecipeIngredient[]

}

@Entity()
@Index(['recipe', 'ingredient'], {unique:true})
export class RecipeIngredient extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @ManyToOne(_ => Recipe, recipe => recipe.recipeIngredient)
  recipe: Recipe

  @ManyToOne(_ => Ingredient, ingredient => ingredient.recipeIngredient, {eager: true})
  ingredient: Ingredient
}

@Entity()
@Index(['recipe', 'appliance'], {unique:true})
export class RecipeAppliance extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @ManyToOne(_ => Recipe, recipe => recipe.recipeIngredient)
  recipe: Recipe

  @ManyToOne(_ => Ingredient, ingredient => ingredient.recipeIngredient, {eager: true})
  appliance: Appliance
}