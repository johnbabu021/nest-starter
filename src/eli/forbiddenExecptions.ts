import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenException extends HttpException {
  constructor(msg: string | { msg: string }) {
    super(msg, HttpStatus.FORBIDDEN);
  }
}

export class BadRequstException extends HttpException {
  constructor(msg: string) {
    super(msg, HttpStatus.BAD_REQUEST);
  }
}
