import { Controller, Get } from '@nestjs/common'
import { ApiFeatureCoreService } from './api-feature-core.service'

@Controller()
export class ApiFeatureCoreController {
  constructor(private readonly service: ApiFeatureCoreService) {}

  @Get('uptime')
  uptime() {
    return this.service.uptime()
  }
}
