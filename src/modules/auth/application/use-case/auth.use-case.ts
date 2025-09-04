import { HashPasswordService } from 'src/lib/hash-password/hash-password.service';
import {
  type IUserRepository,
  USER_REPOSITORY,
} from 'src/modules/users/domain/user.repository';
import { AuthDto } from '../../interfaces/dtos/auth.dto';
import { Inject, NotFoundException } from '@nestjs/common';

export class AuthUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: IUserRepository,
    private readonly hash: HashPasswordService,
  ) {}

  async execute(data: AuthDto) {
    const user = await this.userRepository.findByEmail(data.email);

    if (!user) {
      throw new NotFoundException('Credenciales inválidas');
    }

    const isValidPassword = await this.hash.compare(
      data.password,
      user.password,
    );

    if (!isValidPassword) {
      throw new NotFoundException('Credenciales inválidas');
    }

    return user;
  }
}
