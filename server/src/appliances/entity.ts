import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import { IsString} from '../../node_modules/class-validator';
import {RecipeAppliance} from '../recipes/entity'

@Entity()
export default class Applicance extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text')
  name: string

  @OneToMany(_ => RecipeAppliance, recipeAppliance => recipeAppliance.appliance)
  recipeAppliance: RecipeAppliance[]

}

