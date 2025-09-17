import { IsNumber, IsString } from 'class-validator';

export class CreateProductTypeDto {
  @IsString()
  name: string;

  @IsNumber()
  user_id?: number;
}
