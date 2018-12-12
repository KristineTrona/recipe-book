import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, Index, ManyToOne} from 'typeorm'
import { IsString, IsNumber} from '../../node_modules/class-validator';
import Ingredient from '../ingredients/entity'
import Kitchenware from '../kitchenware/entity'

@Entity()
export default class Recipe extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text')
  name: string

  @IsNumber()
  @Column('int')
  servings: number

  @IsString()
  @Column('text', {nullable: true})
  time: string

  @Column('simple-array')
  instructions: string[]

  @IsString()
  @Column('text')
  imageURL: string

  @OneToMany(_ => RecipeIngredient, recipeIngredient => recipeIngredient.recipe, {eager: true})
  recipeIngredient: RecipeIngredient[]

  @OneToMany(_ => RecipeKitchenware, recipeKitchenware=> recipeKitchenware.recipe, {eager: true})
  recipeKitchenware: RecipeKitchenware[]

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

  @Column('text', {nullable: true})
  amount: string

}

@Entity()
@Index(['recipe', 'kitchenware'], {unique:true})
export class RecipeKitchenware extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @ManyToOne(_ => Recipe, recipe => recipe.recipeIngredient)
  recipe: Recipe

  @ManyToOne(_ => Kitchenware, kitchenware => kitchenware.recipeKitchenware, {eager: true})
  kitchenware: Kitchenware
}