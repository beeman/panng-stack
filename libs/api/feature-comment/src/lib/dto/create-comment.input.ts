import { IsNotEmpty, MinLength } from 'class-validator'
import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CreateCommentInput {
  @Field()
  @IsNotEmpty()
  postId: string

  @Field()
  @IsNotEmpty()
  @MinLength(3)
  text: string
}
