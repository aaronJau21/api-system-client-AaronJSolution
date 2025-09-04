import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../../domain/user.repository';
import { UserEntity } from '../../domain/user.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { Users as PrismaUser } from '@prisma/client';

@Injectable()
export class PrismaUserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(user: UserEntity): Promise<UserEntity> {
    const createdUser = await this.prisma.users.create({
      data: {
        email: user.email,
        name: user.name,
        password: user.password,
      },
    });
    return this.toEntity(createdUser);
  }

  async findByEmail(email: string): Promise<UserEntity | undefined> {
    const user = await this.prisma.users.findUnique({
      where: { email },
    });

    return user ? this.toEntity(user) : undefined;
  }

  private toEntity(user: PrismaUser): UserEntity {
    return new UserEntity(
      user.id,
      user.email,
      user.name as string, // Assuming name is not null, otherwise handle it
      user.password,
    );
  }
}
