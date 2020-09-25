import { gql } from 'apollo-angular'
import { Injectable } from '@angular/core'
import * as Apollo from 'apollo-angular'
import * as ApolloCore from '@apollo/client/core'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type User = {
  __typename?: 'User'
  id?: Maybe<Scalars['String']>
  created?: Maybe<Scalars['DateTime']>
  updated?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  avatarUrl?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  role?: Maybe<Role>
}

/** User role */
export enum Role {
  Admin = 'Admin',
  User = 'User',
}

export type UserToken = {
  __typename?: 'UserToken'
  /** JWT Bearer token */
  token: Scalars['String']
  user: User
}

export type Profile = {
  __typename?: 'Profile'
  id?: Maybe<Scalars['String']>
  created?: Maybe<Scalars['DateTime']>
  username?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  avatarUrl?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  posts?: Maybe<Post>
}

export type Comment = {
  __typename?: 'Comment'
  id?: Maybe<Scalars['String']>
  created?: Maybe<Scalars['DateTime']>
  text?: Maybe<Scalars['String']>
  author?: Maybe<Profile>
  post: Array<Comment>
}

export type IntercomMessage = {
  __typename?: 'IntercomMessage'
  type?: Maybe<Scalars['String']>
  scope?: Maybe<Scalars['String']>
  payload?: Maybe<Scalars['JSON']>
}

export type Post = {
  __typename?: 'Post'
  id?: Maybe<Scalars['String']>
  created?: Maybe<Scalars['DateTime']>
  text?: Maybe<Scalars['String']>
  author: Profile
  commentCount?: Maybe<Scalars['Float']>
  commentedBy?: Maybe<Array<Profile>>
  comments?: Maybe<Array<Comment>>
}

export type Query = {
  __typename?: 'Query'
  me?: Maybe<User>
  profiles?: Maybe<Array<Profile>>
  profile?: Maybe<Profile>
  comments: Array<Comment>
  uptime: Scalars['Float']
  posts?: Maybe<Array<Post>>
  userPosts?: Maybe<Array<Post>>
  post?: Maybe<Post>
}

export type QueryProfileArgs = {
  username: Scalars['String']
}

export type QueryCommentsArgs = {
  postId: Scalars['String']
}

export type QueryUserPostsArgs = {
  userId: Scalars['String']
}

export type QueryPostArgs = {
  id: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  register?: Maybe<UserToken>
  login?: Maybe<UserToken>
  createComment: Comment
  deleteComment: Comment
  intercomPub?: Maybe<IntercomMessage>
  createPost?: Maybe<Post>
  deletePost?: Maybe<Post>
}

export type MutationRegisterArgs = {
  data: RegisterInput
}

export type MutationLoginArgs = {
  data: LoginInput
}

export type MutationCreateCommentArgs = {
  data: CreateCommentInput
}

export type MutationDeleteCommentArgs = {
  id: Scalars['String']
}

export type MutationIntercomPubArgs = {
  payload?: Maybe<Scalars['JSON']>
  scope?: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type MutationCreatePostArgs = {
  data: CreatePostInput
}

export type MutationDeletePostArgs = {
  id: Scalars['String']
}

export type RegisterInput = {
  username: Scalars['String']
  email: Scalars['String']
  name?: Maybe<Scalars['String']>
  avatarUrl?: Maybe<Scalars['String']>
  password: Scalars['String']
}

export type LoginInput = {
  username: Scalars['String']
  password: Scalars['String']
}

export type CreateCommentInput = {
  postId: Scalars['String']
  text: Scalars['String']
}

export type CreatePostInput = {
  text: Scalars['String']
}

export type Subscription = {
  __typename?: 'Subscription'
  intercomSub?: Maybe<IntercomMessage>
}

export type SubscriptionIntercomSubArgs = {
  scope?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type UserDetailsFragment = { __typename?: 'User' } & Pick<
  User,
  'id' | 'name' | 'username' | 'avatarUrl' | 'email'
>

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = { __typename?: 'Query' } & { me?: Maybe<{ __typename?: 'User' } & UserDetailsFragment> }

export type RegisterMutationVariables = Exact<{
  data: RegisterInput
}>

export type RegisterMutation = { __typename?: 'Mutation' } & {
  register?: Maybe<
    { __typename?: 'UserToken' } & Pick<UserToken, 'token'> & { user: { __typename?: 'User' } & UserDetailsFragment }
  >
}

export type LoginMutationVariables = Exact<{
  data: LoginInput
}>

export type LoginMutation = { __typename?: 'Mutation' } & {
  login?: Maybe<
    { __typename?: 'UserToken' } & Pick<UserToken, 'token'> & { user: { __typename?: 'User' } & UserDetailsFragment }
  >
}

export type UptimeQueryVariables = Exact<{ [key: string]: never }>

export type UptimeQuery = { __typename?: 'Query' } & Pick<Query, 'uptime'>

export type IntercomDetailsFragment = { __typename?: 'IntercomMessage' } & Pick<
  IntercomMessage,
  'type' | 'scope' | 'payload'
>

export type IntercomPubMutationVariables = Exact<{
  type: Scalars['String']
  scope?: Maybe<Scalars['String']>
  payload?: Maybe<Scalars['JSON']>
}>

export type IntercomPubMutation = { __typename?: 'Mutation' } & {
  intercomPub?: Maybe<{ __typename?: 'IntercomMessage' } & IntercomDetailsFragment>
}

export type IntercomSubSubscriptionVariables = Exact<{ [key: string]: never }>

export type IntercomSubSubscription = { __typename?: 'Subscription' } & {
  intercomSub?: Maybe<{ __typename?: 'IntercomMessage' } & IntercomDetailsFragment>
}

export type AuthorDetailsFragment = { __typename?: 'Profile' } & Pick<Profile, 'id' | 'username' | 'avatarUrl' | 'name'>

export type PostDetailsFragment = { __typename?: 'Post' } & Pick<Post, 'id' | 'text' | 'created' | 'commentCount'> & {
    author: { __typename?: 'Profile' } & AuthorDetailsFragment
  }

export type CommentDetailsFragment = { __typename?: 'Comment' } & Pick<Comment, 'id' | 'text' | 'created'> & {
    author?: Maybe<{ __typename?: 'Profile' } & AuthorDetailsFragment>
  }

export type PostsQueryVariables = Exact<{ [key: string]: never }>

export type PostsQuery = { __typename?: 'Query' } & {
  posts?: Maybe<Array<{ __typename?: 'Post' } & PostDetailsFragment>>
}

export type UserPostsQueryVariables = Exact<{
  userId: Scalars['String']
}>

export type UserPostsQuery = { __typename?: 'Query' } & {
  userPosts?: Maybe<Array<{ __typename?: 'Post' } & PostDetailsFragment>>
}

export type PostQueryVariables = Exact<{
  id: Scalars['String']
}>

export type PostQuery = { __typename?: 'Query' } & {
  post?: Maybe<
    { __typename?: 'Post' } & {
      comments?: Maybe<Array<{ __typename?: 'Comment' } & CommentDetailsFragment>>
    } & PostDetailsFragment
  >
}

export type CommentsQueryVariables = Exact<{
  postId: Scalars['String']
}>

export type CommentsQuery = { __typename?: 'Query' } & {
  comments: Array<{ __typename?: 'Comment' } & CommentDetailsFragment>
}

export type CreatePostMutationVariables = Exact<{
  data: CreatePostInput
}>

export type CreatePostMutation = { __typename?: 'Mutation' } & {
  createPost?: Maybe<{ __typename?: 'Post' } & PostDetailsFragment>
}

export type CreateCommentMutationVariables = Exact<{
  data: CreateCommentInput
}>

export type CreateCommentMutation = { __typename?: 'Mutation' } & {
  createComment: { __typename?: 'Comment' } & CommentDetailsFragment
}

export type ProfileDetailsFragment = { __typename?: 'Profile' } & Pick<
  Profile,
  'id' | 'username' | 'avatarUrl' | 'name' | 'bio'
>

export type ProfilesQueryVariables = Exact<{ [key: string]: never }>

export type ProfilesQuery = { __typename?: 'Query' } & {
  profiles?: Maybe<Array<{ __typename?: 'Profile' } & ProfileDetailsFragment>>
}

export type ProfileQueryVariables = Exact<{
  username: Scalars['String']
}>

export type ProfileQuery = { __typename?: 'Query' } & {
  profile?: Maybe<
    { __typename?: 'Profile' } & {
      posts?: Maybe<{ __typename?: 'Post' } & PostDetailsFragment>
    } & ProfileDetailsFragment
  >
}

export const UserDetailsFragmentDoc = gql`
  fragment userDetails on User {
    id
    name
    username
    avatarUrl
    email
  }
`
export const IntercomDetailsFragmentDoc = gql`
  fragment IntercomDetails on IntercomMessage {
    type
    scope
    payload
  }
`
export const AuthorDetailsFragmentDoc = gql`
  fragment authorDetails on Profile {
    id
    username
    avatarUrl
    name
  }
`
export const PostDetailsFragmentDoc = gql`
  fragment postDetails on Post {
    id
    text
    created
    commentCount
    author {
      ...authorDetails
    }
  }
  ${AuthorDetailsFragmentDoc}
`
export const CommentDetailsFragmentDoc = gql`
  fragment commentDetails on Comment {
    id
    text
    created
    author {
      ...authorDetails
    }
  }
  ${AuthorDetailsFragmentDoc}
`
export const ProfileDetailsFragmentDoc = gql`
  fragment profileDetails on Profile {
    id
    username
    avatarUrl
    name
    bio
  }
`
export const MeDocument = gql`
  query me {
    me {
      ...userDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class MeGQL extends Apollo.Query<MeQuery, MeQueryVariables> {
  document = MeDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const RegisterDocument = gql`
  mutation Register($data: RegisterInput!) {
    register(data: $data) {
      token
      user {
        ...userDetails
      }
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class RegisterGQL extends Apollo.Mutation<RegisterMutation, RegisterMutationVariables> {
  document = RegisterDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const LoginDocument = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      token
      user {
        ...userDetails
      }
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
  document = LoginDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UptimeDocument = gql`
  query Uptime {
    uptime
  }
`

@Injectable({
  providedIn: 'root',
})
export class UptimeGQL extends Apollo.Query<UptimeQuery, UptimeQueryVariables> {
  document = UptimeDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const IntercomPubDocument = gql`
  mutation IntercomPub($type: String!, $scope: String, $payload: JSON) {
    intercomPub(type: $type, scope: $scope, payload: $payload) {
      ...IntercomDetails
    }
  }
  ${IntercomDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class IntercomPubGQL extends Apollo.Mutation<IntercomPubMutation, IntercomPubMutationVariables> {
  document = IntercomPubDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const IntercomSubDocument = gql`
  subscription IntercomSub {
    intercomSub {
      ...IntercomDetails
    }
  }
  ${IntercomDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class IntercomSubGQL extends Apollo.Subscription<IntercomSubSubscription, IntercomSubSubscriptionVariables> {
  document = IntercomSubDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const PostsDocument = gql`
  query posts {
    posts {
      ...postDetails
    }
  }
  ${PostDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class PostsGQL extends Apollo.Query<PostsQuery, PostsQueryVariables> {
  document = PostsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UserPostsDocument = gql`
  query userPosts($userId: String!) {
    userPosts(userId: $userId) {
      ...postDetails
    }
  }
  ${PostDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UserPostsGQL extends Apollo.Query<UserPostsQuery, UserPostsQueryVariables> {
  document = UserPostsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const PostDocument = gql`
  query post($id: String!) {
    post(id: $id) {
      ...postDetails
      comments {
        ...commentDetails
      }
    }
  }
  ${PostDetailsFragmentDoc}
  ${CommentDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class PostGQL extends Apollo.Query<PostQuery, PostQueryVariables> {
  document = PostDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const CommentsDocument = gql`
  query comments($postId: String!) {
    comments(postId: $postId) {
      ...commentDetails
    }
  }
  ${CommentDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class CommentsGQL extends Apollo.Query<CommentsQuery, CommentsQueryVariables> {
  document = CommentsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const CreatePostDocument = gql`
  mutation createPost($data: CreatePostInput!) {
    createPost(data: $data) {
      ...postDetails
    }
  }
  ${PostDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class CreatePostGQL extends Apollo.Mutation<CreatePostMutation, CreatePostMutationVariables> {
  document = CreatePostDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const CreateCommentDocument = gql`
  mutation createComment($data: CreateCommentInput!) {
    createComment(data: $data) {
      ...commentDetails
    }
  }
  ${CommentDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class CreateCommentGQL extends Apollo.Mutation<CreateCommentMutation, CreateCommentMutationVariables> {
  document = CreateCommentDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const ProfilesDocument = gql`
  query profiles {
    profiles {
      ...profileDetails
    }
  }
  ${ProfileDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class ProfilesGQL extends Apollo.Query<ProfilesQuery, ProfilesQueryVariables> {
  document = ProfilesDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const ProfileDocument = gql`
  query profile($username: String!) {
    profile(username: $username) {
      ...profileDetails
      posts {
        ...postDetails
      }
    }
  }
  ${ProfileDetailsFragmentDoc}
  ${PostDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class ProfileGQL extends Apollo.Query<ProfileQuery, ProfileQueryVariables> {
  document = ProfileDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

interface WatchQueryOptionsAlone<V> extends Omit<ApolloCore.WatchQueryOptions<V>, 'query' | 'variables'> {}

interface QueryOptionsAlone<V> extends Omit<ApolloCore.QueryOptions<V>, 'query' | 'variables'> {}

interface MutationOptionsAlone<T, V> extends Omit<ApolloCore.MutationOptions<T, V>, 'mutation' | 'variables'> {}

interface SubscriptionOptionsAlone<V> extends Omit<ApolloCore.SubscriptionOptions<V>, 'query' | 'variables'> {}

@Injectable({ providedIn: 'root' })
export class ApolloAngularSDK {
  constructor(
    private meGql: MeGQL,
    private registerGql: RegisterGQL,
    private loginGql: LoginGQL,
    private uptimeGql: UptimeGQL,
    private intercomPubGql: IntercomPubGQL,
    private intercomSubGql: IntercomSubGQL,
    private postsGql: PostsGQL,
    private userPostsGql: UserPostsGQL,
    private postGql: PostGQL,
    private commentsGql: CommentsGQL,
    private createPostGql: CreatePostGQL,
    private createCommentGql: CreateCommentGQL,
    private profilesGql: ProfilesGQL,
    private profileGql: ProfileGQL,
  ) {}

  me(variables?: MeQueryVariables, options?: QueryOptionsAlone<MeQueryVariables>) {
    return this.meGql.fetch(variables, options)
  }

  meWatch(variables?: MeQueryVariables, options?: WatchQueryOptionsAlone<MeQueryVariables>) {
    return this.meGql.watch(variables, options)
  }

  register(
    variables: RegisterMutationVariables,
    options?: MutationOptionsAlone<RegisterMutation, RegisterMutationVariables>,
  ) {
    return this.registerGql.mutate(variables, options)
  }

  login(variables: LoginMutationVariables, options?: MutationOptionsAlone<LoginMutation, LoginMutationVariables>) {
    return this.loginGql.mutate(variables, options)
  }

  uptime(variables?: UptimeQueryVariables, options?: QueryOptionsAlone<UptimeQueryVariables>) {
    return this.uptimeGql.fetch(variables, options)
  }

  uptimeWatch(variables?: UptimeQueryVariables, options?: WatchQueryOptionsAlone<UptimeQueryVariables>) {
    return this.uptimeGql.watch(variables, options)
  }

  intercomPub(
    variables: IntercomPubMutationVariables,
    options?: MutationOptionsAlone<IntercomPubMutation, IntercomPubMutationVariables>,
  ) {
    return this.intercomPubGql.mutate(variables, options)
  }

  intercomSub(
    variables?: IntercomSubSubscriptionVariables,
    options?: SubscriptionOptionsAlone<IntercomSubSubscriptionVariables>,
  ) {
    return this.intercomSubGql.subscribe(variables, options)
  }

  posts(variables?: PostsQueryVariables, options?: QueryOptionsAlone<PostsQueryVariables>) {
    return this.postsGql.fetch(variables, options)
  }

  postsWatch(variables?: PostsQueryVariables, options?: WatchQueryOptionsAlone<PostsQueryVariables>) {
    return this.postsGql.watch(variables, options)
  }

  userPosts(variables: UserPostsQueryVariables, options?: QueryOptionsAlone<UserPostsQueryVariables>) {
    return this.userPostsGql.fetch(variables, options)
  }

  userPostsWatch(variables: UserPostsQueryVariables, options?: WatchQueryOptionsAlone<UserPostsQueryVariables>) {
    return this.userPostsGql.watch(variables, options)
  }

  post(variables: PostQueryVariables, options?: QueryOptionsAlone<PostQueryVariables>) {
    return this.postGql.fetch(variables, options)
  }

  postWatch(variables: PostQueryVariables, options?: WatchQueryOptionsAlone<PostQueryVariables>) {
    return this.postGql.watch(variables, options)
  }

  comments(variables: CommentsQueryVariables, options?: QueryOptionsAlone<CommentsQueryVariables>) {
    return this.commentsGql.fetch(variables, options)
  }

  commentsWatch(variables: CommentsQueryVariables, options?: WatchQueryOptionsAlone<CommentsQueryVariables>) {
    return this.commentsGql.watch(variables, options)
  }

  createPost(
    variables: CreatePostMutationVariables,
    options?: MutationOptionsAlone<CreatePostMutation, CreatePostMutationVariables>,
  ) {
    return this.createPostGql.mutate(variables, options)
  }

  createComment(
    variables: CreateCommentMutationVariables,
    options?: MutationOptionsAlone<CreateCommentMutation, CreateCommentMutationVariables>,
  ) {
    return this.createCommentGql.mutate(variables, options)
  }

  profiles(variables?: ProfilesQueryVariables, options?: QueryOptionsAlone<ProfilesQueryVariables>) {
    return this.profilesGql.fetch(variables, options)
  }

  profilesWatch(variables?: ProfilesQueryVariables, options?: WatchQueryOptionsAlone<ProfilesQueryVariables>) {
    return this.profilesGql.watch(variables, options)
  }

  profile(variables: ProfileQueryVariables, options?: QueryOptionsAlone<ProfileQueryVariables>) {
    return this.profileGql.fetch(variables, options)
  }

  profileWatch(variables: ProfileQueryVariables, options?: WatchQueryOptionsAlone<ProfileQueryVariables>) {
    return this.profileGql.watch(variables, options)
  }
}
