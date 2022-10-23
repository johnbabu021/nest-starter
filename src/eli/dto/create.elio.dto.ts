import { IsInt, isString, IsString } from 'class-validator';
export class CreateEli {
  @IsString()
  name: string;
  @IsInt()
  age: number;
  @IsString()
  breed: string;
}
