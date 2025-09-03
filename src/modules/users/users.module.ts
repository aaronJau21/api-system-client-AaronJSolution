import { Module } from '@nestjs/common';
import { UsersController } from './interfaces/users.controller';

@Module({
  controllers: [UsersController]
})
export class UsersModule {}
