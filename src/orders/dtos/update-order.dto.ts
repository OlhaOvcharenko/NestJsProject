import {
    IsNotEmpty,
    IsString,
    IsUUID,
    Length,
} from 'class-validator';
  
export class UpdateOrderDTO {
  
  @IsNotEmpty()
  @IsUUID()
  @IsString()
  productId: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 20)
  client: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 20)
  address: string;
}