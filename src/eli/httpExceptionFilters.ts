import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  // constructor(private msg: string) {}
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    // const message=exception.getResponse()
    response.status(status).json({
      statusCode: status,
      date: new Date().toISOString(),
      url: request.url,
      msg: exception.getResponse(),
    });
  }
}
