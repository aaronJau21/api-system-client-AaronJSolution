import { StateClient } from '@prisma/client';
import { IsEnum } from 'class-validator';

export class UpdateStateClientDto {
  @IsEnum(StateClient)
  state: StateClient;
}
