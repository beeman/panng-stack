import { ApiDataAccessService } from '@angular-graphql/api/data-access'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ApiFeatureProfileService {
  constructor(private readonly data: ApiDataAccessService) {}

  profiles() {
    return this.data.user.findMany({
      orderBy: { createdAt: 'desc' },
    })
  }

  profile(username: string) {
    return this.data.findUserByUsername(username)
  }

  profilePosts(userId) {
    return this.data.findUserById(userId).posts()
  }
}
