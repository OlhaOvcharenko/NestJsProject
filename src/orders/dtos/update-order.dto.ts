import {
    IsNotEmpty,
    IsString,
    Length,
} from 'class-validator';
import { Product } from 'src/db';
  
export class UpdateOrderDTO {
  
  @IsString()
  productId: Product['id'];

  @IsNotEmpty()
  @IsString()
  @Length(5, 20)
  client: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 20)
  address: string;
}