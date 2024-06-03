import { Controller, Get } from '@nestjs/common';

@Controller('first')
export class FirstController {
  @Get('hello')
  sayHelloFirst(): string {
    return 'Hello First';
  }
}
