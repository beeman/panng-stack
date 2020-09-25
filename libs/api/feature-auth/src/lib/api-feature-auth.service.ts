import { ApiDataAccessService } from '@angular-graphql/api/data-access'
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { ApiFeatureAuthHelper } from './api-feature-auth.helper'
import { RegisterInput } from './dto/register.input'
import { UserToken } from './models/user-token'

@Injectable()
export class ApiFeatureAuthService {
  constructor(private readonly jwtService: JwtService, private readonly data: ApiDataAccessService) {}

  async register(payload: RegisterInput) {
    const user = await this.data.createUser({
      ...payload,
    })

    return this.signUser(user)
  }

  async login(username: string, password: string) {
    const user = await this.data.findUserByUsername(username)

    if (!user) {
      throw new NotFoundException(`No user found for username: ${username}`)
    }

    const passwordValid = await ApiFeatureAuthHelper.validatePassword(password, user.password)

    if (!passwordValid) {
      throw new BadRequestException('Invalid password')
    }

    return this.signUser(user)
  }

  signUser(user): UserToken {
    const token = this.jwtService.sign({ userId: user.id })
    return { token, user }
  }

  validateUser(userId: string) {
    return this.data.findUserById(userId)
  }

  getUserFromToken(token: string) {
    const userId = this.jwtService.decode(token)['userId']
    console.log('getUserFromToken userId', userId)
    return this.data.findUserById(userId)
  }
}
