import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './modules/users/users.module';
import { LibModule } from './lib/lib.module';

@Module({
  imports: [PrismaModule, UsersModule, LibModule],
})
export class AppModule {}
