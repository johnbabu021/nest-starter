import { Injectable, ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { ObjectSchema } from 'joi';
import { BadRequstException } from './forbiddenExecptions';
import { HttpExceptionFilter } from './httpExceptionFilters';
@Injectable()
export class JoiException implements PipeTransform {
  constructor(private schema: ObjectSchema) {}
  transform(value: any, metadata: ArgumentMetadata) {
    const data = this.schema.validate({ id: 3 });
    // console.log(data);
    if (data.error) {
      //   console.log(error);
      throw new BadRequstException('validation failed');
    }
    return value;
  }
}
