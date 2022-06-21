import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
  constructor(private userServices: UserService, private jwt: JwtService) {}

  async getToken(Payload) {
    return {
      token: this.jwt.sign({
        email: Payload.email,
        id: Payload.id,
        phone: Number(Payload.phone),
        fist_name: Payload.fist_name,
      }),
    };
  }

  async validadeUser(email: string, password: string) {
    try {
      const user = await this.userServices.findByEmail(email);
      if (!user) return null;
      const match = compareSync(password, user.password);
      if (!match) return null;
      return user;
    } catch (err) {
      return null;
    }
  }
}
