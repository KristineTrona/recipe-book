import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import { IsString} from '../../node_modules/class-validator';
import {RecipeIngredient} from '../recipes/entity'

@Entity()
export default class Ingredient extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text', {nullable:false})
  name: string

  @OneToMany(_ => RecipeIngredient, recipeIngredient => recipeIngredient.ingredient)
  recipeIngredient: RecipeIngredient[]

}

