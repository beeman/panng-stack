import { Field, ObjectType } from '@nestjs/graphql'
import { Role } from './role'

@ObjectType()
export class User {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  created: Date

  @Field({ nullable: true })
  updated: Date

  @Field({ nullable: true })
  email: string

  @Field({ nullable: true })
  username?: string

  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  avatarUrl?: string

  // @Field({ nullable: true })
  // location?: string;

  @Field({ nullable: true })
  bio?: string

  @Field((type) => Role, { nullable: true })
  role: Role

  password?: string
}
