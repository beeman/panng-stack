import { Injectable, OnModuleDestroy, OnModuleInit, Logger } from '@nestjs/common'
import { PrismaClient, UserCreateInput } from '@prisma/client'
import { getGravatarUrl, hashPassword } from './api-data-access.helper'
import { sampleUsers } from './sample-data/sample-users'

@Injectable()
export class ApiDataAccessService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super()
  }

  public async onModuleDestroy() {
    await this.$disconnect()
  }

  public async onModuleInit() {
    await this.$connect()
    await this.sampleData()
  }

  async createUser(input: UserCreateInput) {
    const password = await hashPassword(input.password)

    return this.user.create({
      data: {
        username: input.username,
        name: input.name || input.username,
        email: input.email.toLowerCase(),
        avatarUrl: input.avatarUrl || getGravatarUrl(input.email.toLowerCase()),
        password,
      },
    })
  }

  public findUserByEmail(email: string) {
    return this.user.findOne({ where: { email } })
  }

  public findUserById(userId: string) {
    return this.user.findOne({ where: { id: userId } })
  }

  public findUserByUsername(username: string) {
    return this.user.findOne({ where: { username } })
  }

  private async sampleData() {
    await this.deleteData()

    for (const data of sampleUsers) {
      await this.user.create({ data })
    }

    const comments = await this.comment.count()
    const posts = await this.post.count()
    const userCount = await this.user.count()

    console.log('Sample data:', { comments, posts, users: userCount })
  }

  private async deleteData() {
    await this.comment.deleteMany({ where: {} })
    await this.post.deleteMany({ where: {} })
    await this.user.deleteMany({ where: {} })
  }
}
