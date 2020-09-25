import { Controller } from '@nestjs/common'

import { ApiFeatureProfileService } from './api-feature-profile.service'

@Controller()
export class ApiFeatureProfileController {
  constructor(private readonly auth: ApiFeatureProfileService) {}
}
