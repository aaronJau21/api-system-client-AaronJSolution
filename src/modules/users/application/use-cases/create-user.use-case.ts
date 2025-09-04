import { ConflictException, Inject } from '@nestjs/common';
import { UserEntity } from '../../domain/user.entity';
import { USER_REPOSITORY, type IUserRepository } from '../../domain/user.repository';
import { CreateUserDto } from '../../interfaces/dto/create-user.dto';
import { HashPasswordService } from 'src/lib/hash-password/hash-password.service';

export class CreateUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: IUserRepository,
    private readonly hashPasswordService: HashPasswordService,
  ) {}

  async execute(data: CreateUserDto): Promise<UserEntity> {
    const existUser = await this.userRepository.findByEmail(data.email);

    if (existUser) {
      throw new ConflictException('El usuario ya existe');
    }
    const hashPassword = await this.hashPasswordService.hash(data.password);

    const user = new UserEntity(undefined, data.email, data.name, hashPassword);
    return this.userRepository.createUser(user);
  }
}
