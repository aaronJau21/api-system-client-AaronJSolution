import { Module } from '@nestjs/common';
import { HashPasswordService } from './hash-password/hash-password.service';
import { JsonWtService } from './json-wt/json-wt.service';
import { JwtModule } from '@nestjs/jwt';
import { envs } from 'src/config/envs';

@Module({
  providers: [HashPasswordService, JsonWtService],
  imports: [
    JwtModule.register({
      global: true,
      secret: envs.secret_key,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  exports: [HashPasswordService, JsonWtService],
})
export class LibModule {}
