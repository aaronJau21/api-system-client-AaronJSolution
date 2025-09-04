import { UserEntity } from './user.entity';

export interface IUserRepository {
  createUser(user: UserEntity): Promise<UserEntity>;
  findByEmail(email: string): Promise<UserEntity | undefined>;
  findById(id: number): Promise<UserEntity | undefined>;
  updateUser(id: number, user: UserEntity): Promise<UserEntity>;
  deleteUser(id: number): Promise<void>;
}
