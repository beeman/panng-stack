import { UserCreateInput } from '@prisma/client'

const password = '$2b$10$dqyYw5XovLjpmkYNiRDEWuwKaRAvLaG45fnXE5b3KTccKZcRPka2m' // "secret42",

export const sampleUsers: UserCreateInput[] = [
  {
    id: 'summer',
    username: 'summer',
    password,
    email: 'summer@example.com',
    avatarUrl: 'https://imgur.com/Y4dT5W0.png',
    name: 'Summer Smith',
    role: 'User',
    location: 'Who cares...',
    bio: 'Hey!',

    posts: {
      create: [
        {
          text: 'Hi! Summer here! Nice to meet you all!',
        },
      ],
    },
  },
  {
    id: 'morty',
    username: 'morty',
    password,
    email: 'morty@example.com',
    avatarUrl: 'https://imgur.com/Ca4c884.png',
    name: 'Morty Smith',
    role: 'User',
    location: 'School!',
    bio: "Hi there I'm Morty 🎉!",
    posts: {
      create: [
        {
          text: 'Morty Represents! 😎',
        },
      ],
    },
  },
  {
    id: 'rick',
    username: 'rick',
    password,
    email: 'rick@example.com',
    avatarUrl: 'https://imgur.com/0Ao2f63.png',
    name: 'Rick Sanchez',
    role: 'Admin',
    location: 'Earth C-137',
    bio: 'I am the smartest guy in all universes!',
    posts: {
      create: {
        text: "Hello, I'm Rick and I love GraphQL",
        commentCount: 2,
        comments: {
          create: [
            {
              text: 'Welcome to the site Rick!!',
              author: { connect: { username: 'summer' } },
            },
            {
              text: 'I hope you enjoy your stay!!!',
              author: { connect: { username: 'morty' } },
            },
          ],
        },
      },
    },
  },
  {
    id: 'beth',
    username: 'beth',
    password,
    email: 'beth@example.com',
    avatarUrl: 'https://imgur.com/o28uw9C.png',
    name: 'Beth Smith',
    role: 'User',
    location: 'Earth',
    bio: 'Veterinarian',
    posts: {
      create: [
        {
          text: 'I love horses!',
        },
      ],
    },
  },
  {
    id: 'jerry',
    username: 'jerry',
    password,
    email: 'jerry@example.com',
    avatarUrl: 'https://imgur.com/Yr4YiTi.png',
    name: 'Jerry Smith',
    role: 'User',
    location: 'Earth',
    bio: 'Husband of @beth',
    posts: {
      create: [
        {
          text: 'Something with apples!',
        },
      ],
    },
  },
]
