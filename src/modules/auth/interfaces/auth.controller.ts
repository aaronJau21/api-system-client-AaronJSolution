import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from './dtos/auth.dto';
import { AuthUseCase } from '../application/use-case/auth.use-case';

@Controller('auth')
export class AuthController {
  constructor(private readonly authUseCase: AuthUseCase) {}

  @Post('login')
  async login(@Body() data: AuthDto) {
    return this.authUseCase.execute(data);
  }
}
