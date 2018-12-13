import { BaseEntity, Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
import * as bcrypt from 'bcrypt'
import { IsEmail, IsString, MinLength, Length } from '../../node_modules/class-validator';
import { Exclude } from '../../node_modules/class-transformer'


@Entity()
export default class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number
  
  @IsString()
  @Length(3,20)
  @Column('text', {nullable:false})
  username: string

  @IsEmail()
  @Column('text', {nullable:false})
  email: string

  @IsString()
  @MinLength(8)
  @Column('text', {nullable:false})
  @Exclude({ toPlainOnly: true })
  password: string

  async setPassword(rawPassword: string) {
    const hash = await bcrypt.hash(rawPassword, 10)
    this.password = hash
  }

  checkPassword(rawPassword: string): Promise<boolean> {
    return bcrypt.compare(rawPassword, this.password)
  }
}
