import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, MinLength } from 'class-validator'
import { UpdateUserInput } from './update-user.input'

@InputType()
export class CreateUserInput extends UpdateUserInput {
  @Field()
  @IsNotEmpty()
  @MinLength(8)
  password: string
}
