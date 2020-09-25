import { IsNotEmpty, MinLength } from 'class-validator'
import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class UpdateUserPasswordInput {
  @Field()
  // @IsNotEmpty()
  // @MinLength(8)
  password: string
}
