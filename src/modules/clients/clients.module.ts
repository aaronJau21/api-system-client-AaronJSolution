import { Module } from '@nestjs/common';
import { ClientsController } from './interfaces/clients.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CLIENT_REPOSITORY } from './domain/client.entity';
import { PrismaClientRepository } from './infrastructure/prisma/prisma-client.repository';
import { CreateClientUseCase } from './application/use-cases/create-client.use-case';
import { GetAllClientUseCase } from './application/use-cases/get-all-client.use-case';
import { UpdateStateClientUseCase } from './application/use-cases';
import { LibModule } from 'src/lib/lib.module';

@Module({
  controllers: [ClientsController],
  providers: [
    {
      provide: CLIENT_REPOSITORY,
      useClass: PrismaClientRepository,
    },
    CreateClientUseCase,
    GetAllClientUseCase,
    UpdateStateClientUseCase,
  ],
  imports: [PrismaModule, LibModule],
})
export class ClientsModule {}
