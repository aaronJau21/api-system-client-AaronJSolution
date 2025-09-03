export class UserEntity {
  constructor(
    public id: number,
    public email: string,
    public name: string,
    public password: string,
  ) {}
}
