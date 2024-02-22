import { Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, Length, Min } from 'class-validator';

export class UpdateProductDTO {
    @IsNotEmpty()
    @Length(10, 20)
    name: string;

    @IsNotEmpty()
    price: number;

    @IsString()
    @IsNotEmpty()
    @Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : ''))
    description: string;
}