import { Field, ObjectType } from '@nestjs/graphql'
import { Profile } from '@angular-graphql/api/feature-profile'

@ObjectType()
export class Post {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  created: Date

  @Field({ nullable: true })
  text: string

  @Field((type) => Profile)
  author: Profile

  @Field({ nullable: true })
  commentCount: number

  @Field((type) => [Profile], { nullable: true })
  commentedBy: Profile[]
}
