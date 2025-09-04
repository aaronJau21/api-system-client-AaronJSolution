import { Module } from '@nestjs/common';
import { UsersController } from './interfaces/users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
import { PrismaUserRepository } from './infrastructure/prisma/prisma-user.repository';
import { LibModule } from 'src/lib/lib.module';

@Module({
  controllers: [UsersController],
  providers: [
    CreateUserUseCase,
    {
      provide: 'UserRepository',
      useClass: PrismaUserRepository,
    },
  ],
  imports: [PrismaModule, LibModule],
})
export class UsersModule {}
