import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Profile {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  created: Date

  @Field({ nullable: true })
  username?: string

  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  avatarUrl?: string

  @Field({ nullable: true })
  bio?: string

  @Field({ nullable: true })
  location?: string
}
