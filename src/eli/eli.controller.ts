import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Optional,
  Post,
  Query,
} from '@nestjs/common';
import { CreateEli } from './dto/create.elio.dto';
import { EliService } from './eli.service';
import { ForbiddenException } from './forbiddenExecptions';
@Controller('eli')
export class EliController {
  constructor(@Optional() private readonly eliService: EliService) {}
  @Post()
  async create(@Body() eli: CreateEli) {
    return this.eliService.create(eli);
  }
  @Get()
  async find(@Query() q: { name: string }): Promise<CreateEli[]> {
    if (q.name === 'john') {
      throw new ForbiddenException('JOHN is not allowed to enter here');
    }
    return this.eliService.findAll();
  }
}
