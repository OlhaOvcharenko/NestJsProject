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
  //@IsUUID()
  @IsString()
  clientId: string;
}