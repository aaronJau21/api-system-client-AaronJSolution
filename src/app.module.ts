import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './modules/users/users.module';
import { LibModule } from './lib/lib.module';
import { AuthModule } from './modules/auth/auth.module';
import { ClientsModule } from './modules/clients/clients.module';
import { TypeProjectsModule } from './modules/type-projects/type-projects.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    LibModule,
    AuthModule,
    ClientsModule,
    TypeProjectsModule,
  ],
})
export class AppModule {}
