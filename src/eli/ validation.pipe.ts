import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { BadRequstException } from './forbiddenExecptions';

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToInstance(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequstException('INvalid data');
    }
    return value;
  }
  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Number, Boolean, Array, Object];
    return !types.includes(metatype);
  }
}
