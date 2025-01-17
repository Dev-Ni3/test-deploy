import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags("App Module")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('healthCheck')
  getHello(): string {
    return this.appService.getHello();
  }
}
