import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import { IsString} from '../../node_modules/class-validator';
import {RecipeKitchenware} from '../recipes/entity'

@Entity()
export default class Kitchenware extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text')
  name: string

  @OneToMany(_ => RecipeKitchenware, recipeKitchenware => recipeKitchenware.kitchenware)
  recipeKitchenware: RecipeKitchenware[]

}

