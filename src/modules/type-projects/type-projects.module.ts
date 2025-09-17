import { Module } from '@nestjs/common';
import { TypeProjectsController } from './interfaces/type-projects.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PRODUCT_TYPE } from './domain/product-type.entity';
import { TypeProjectsRepository } from './infrastructure/prisma/prisma-type-projects.repository';
import {
  CreateTypeProjectsUseCase,
  GetAllTypeProjectsUseCase,
} from './application/use-case';

@Module({
  controllers: [TypeProjectsController],
  providers: [
    {
      provide: PRODUCT_TYPE,
      useClass: TypeProjectsRepository,
    },
    CreateTypeProjectsUseCase,
    GetAllTypeProjectsUseCase,
  ],
  imports: [PrismaModule],
})
export class TypeProjectsModule {}
