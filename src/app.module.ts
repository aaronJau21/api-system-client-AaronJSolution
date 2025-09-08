import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './modules/users/users.module';
import { LibModule } from './lib/lib.module';
import { AuthModule } from './modules/auth/auth.module';
import { ClientsModule } from './modules/clients/clients.module';

@Module({
  imports: [PrismaModule, UsersModule, LibModule, AuthModule, ClientsModule],
})
export class AppModule {}
