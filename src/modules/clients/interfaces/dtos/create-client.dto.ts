import { StateClient } from '@prisma/client';
import { IsEnum, IsString } from 'class-validator';

export class CreateClientDto {
  @IsString()
  public name: string;

  @IsString()
  public father_last_name: string;

  @IsString()
  public mother_last_name: string;

  @IsString()
  public email: string;

  @IsString()
  public phone: string;

  @IsEnum(StateClient)
  @IsString()
  public state: StateClient;
}
