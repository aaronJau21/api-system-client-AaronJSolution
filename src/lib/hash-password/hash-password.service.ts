import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';

@Injectable()
export class HashPasswordService {
  public async hash(password: string): Promise<string> {
    return argon.hash(password);
  }

  public async compare(password: string, hash: string): Promise<boolean> {
    return argon.verify(hash, password);
  }
}
