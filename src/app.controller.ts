import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  answer(): string {
    return 'The API  is working';
  }
}
