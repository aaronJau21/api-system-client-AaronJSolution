import { Module } from '@nestjs/common';
import { UsersController } from './interfaces/users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
import { PrismaUserRepository } from './infrastructure/prisma/prisma-user.repository';
import { LibModule } from 'src/lib/lib.module';
import { FindByEmailUserCase } from './application/use-cases/find-by-email-user.case';
import { USER_REPOSITORY } from './domain/user.repository';

@Module({
  controllers: [UsersController],
  providers: [
    CreateUserUseCase,
    {
      provide: USER_REPOSITORY,
      useClass: PrismaUserRepository,
    },
    FindByEmailUserCase,
  ],
  imports: [PrismaModule, LibModule],
  exports: [USER_REPOSITORY],
})
export class UsersModule {}
