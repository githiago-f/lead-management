import { Controller, Get } from '@nestjs/common';

@Controller()
export class MainController {
  @Get()
  public rootReturn() {
    return 'Hello World!';
  }
}
