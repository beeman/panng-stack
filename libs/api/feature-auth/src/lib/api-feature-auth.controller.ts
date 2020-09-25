import { Controller } from '@nestjs/common'

import { ApiFeatureAuthService } from './api-feature-auth.service'

@Controller()
export class ApiFeatureAuthController {
  constructor(private readonly auth: ApiFeatureAuthService) {}
}
