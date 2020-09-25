import { IsEmail, IsNotEmpty, MinLength } from 'class-validator'
import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class RegisterInput {
  @Field()
  @IsNotEmpty()
  @MinLength(3)
  username: string

  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string

  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  avatarUrl?: string

  // @Field({ nullable: true })
  // location?: string;

  @Field()
  @IsNotEmpty()
  @MinLength(8)
  password: string
}
