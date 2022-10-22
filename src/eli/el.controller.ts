import { Controller, Get } from '@nestjs/common';

@Controller('emi')
export class ElController {
  @Get()
  async newBody(): Promise<any> {
    return 'hello';
  }
}
