export class AuthEntity {
  constructor(
    public id: number,
    public email: string,
    public name: string,
    public token: string,
  ) {}
}
