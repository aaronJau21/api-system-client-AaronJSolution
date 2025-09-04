export class UserEntity {
  constructor(
    public id: number | undefined,
    public email: string,
    public name: string,
    public password: string,
  ) {}
}
