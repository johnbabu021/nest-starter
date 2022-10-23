import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Optional,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseFilters,
  UsePipes,
} from '@nestjs/common';
import * as Joi from 'joi';
import { ValidationPipe } from './ validation.pipe';
import { CreateEli } from './dto/create.elio.dto';
import { EliService } from './eli.service';
import { ForbiddenException } from './forbiddenExecptions';
import { HttpExceptionFilter } from './httpExceptionFilters';
import { JoiException } from './joiValidation.pipe';
const getEliSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
});
@Controller('eli')
@UseFilters(HttpExceptionFilter)
export class EliController {
  constructor(@Optional() private readonly eliService: EliService) {}
  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() eli: CreateEli) {
    return this.eliService.create(eli);
  }
  @Get('/:id')
  @UsePipes(new JoiException(getEliSchema))
  async findOne(@Param() id: number) {
    return this.eliService.findAll()[id];
  }
  @Get()
  async find(@Query() q: { name: string }): Promise<CreateEli[]> {
    if (q.name === 'john') {
      // throw new Error('hello');
      throw new ForbiddenException('JOHN is not allowed to enter here');
    }
    return this.eliService.findAll();
  }
}
