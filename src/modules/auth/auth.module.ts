import { Module } from '@nestjs/common';
import { LibModule } from 'src/lib/lib.module';
import { UsersModule } from '../users/users.module';
import { AuthController } from './interfaces/auth.controller';
import { AuthUseCase } from './application/use-case/auth.use-case';
import { PrismaUserRepository } from '../users/infrastructure/prisma/prisma-user.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [LibModule, UsersModule, PrismaModule],
  controllers: [AuthController],
  providers: [AuthUseCase],
})
export class AuthModule {}
