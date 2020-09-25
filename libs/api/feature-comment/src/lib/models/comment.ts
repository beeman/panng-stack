import { Field, ObjectType } from '@nestjs/graphql'
import { Profile } from '@angular-graphql/api/feature-profile'

@ObjectType()
export class Comment {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  created: Date

  @Field({ nullable: true })
  text: string

  @Field(() => Profile, { nullable: true })
  author: Profile
}
