import { HashPasswordService } from 'src/lib/hash-password/hash-password.service';
import {
  type IUserRepository,
  USER_REPOSITORY,
} from 'src/modules/users/domain/user.repository';
import { AuthDto } from '../../interfaces/dtos/auth.dto';
import { Inject, NotFoundException } from '@nestjs/common';
import { AuthEntity } from '../../domain/auth.entity';
import { JsonWtService } from 'src/lib/json-wt/json-wt.service';

export class AuthUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: IUserRepository,
    private readonly hash: HashPasswordService,
    private readonly jsonWtService: JsonWtService,
  ) {}

  async execute(data: AuthDto): Promise<AuthEntity> {
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

    const token = await this.jsonWtService.createToken(
      user.id as number,
      user.name,
      user.email,
    );

    return new AuthEntity(user.id as number, user.email, user.name, token);
  }
}
