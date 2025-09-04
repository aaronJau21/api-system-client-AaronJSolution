import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JsonWtService {
  constructor(private readonly jwtService: JwtService) {}

  public async createToken(
    id: number,
    name: string,
    email: string,
  ): Promise<string> {
    const token = await this.jwtService.signAsync({ id, name, email });

    return token;
  }
}
