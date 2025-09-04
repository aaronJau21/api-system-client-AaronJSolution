import { Inject, NotFoundException } from '@nestjs/common';
import type { IUserRepository } from '../../domain/user.repository';
import { UserEntity } from '../../domain/user.entity';

export class FindByEmailUserCase {
  constructor(
    @Inject('UserRepository') private readonly userRepository: IUserRepository,
  ) {}

  async execute(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    return user;
  }
}
