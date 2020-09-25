import { Controller } from '@nestjs/common'

import { ApiDataAccessService } from './api-data-access.service'

@Controller()
export class ApiDataAccessController {
  constructor(private readonly auth: ApiDataAccessService) {}
}
