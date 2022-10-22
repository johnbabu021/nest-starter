import {
  Controller,
  Get,
  Header,
  Headers,
  HttpCode,
  Ip,
  Param,
  Post,
  Put,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { Request } from 'express';
@Controller('cats')
export class Catsontroller {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
  @Post('/profile')
  @HttpCode(200)
  findNew(): { name: string } {
    return { name: 'this is a post method' };
  }
  @Put('/new')
  //   @Header('cache-control', 'john')
  @Redirect('https://nestjs.com', 301)
  findOne(
    @Res() response,
    @Req() request: Request,
    @Query() query,
    @Headers() headers,
    @Ip() ip,
  ): string {
    // !response.status(200).json({ name: request.headers, query, headers, ip });
    return 'hello world';
  }
  @Get('/joh/:id')
  findOneById(@Query('name') name, @Param() param, @Param('id') id): string {
    return `this will return a ${param.id}${id} ${name} from you`;
  }
}
