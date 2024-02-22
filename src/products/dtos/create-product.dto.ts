import { Transform } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
  Min,
} from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty()
  @IsString()
  @Length(10, 20)
  name: string;

  @IsNotEmpty()
  price: number;

  @Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : ''))
  description: string;
}