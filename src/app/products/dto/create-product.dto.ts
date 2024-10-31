import { Availability } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(Availability)
  readonly availability: Availability;

  @IsNumber()
  price: number;
}
