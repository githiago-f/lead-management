import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user.entity';
import { UserService } from 'src/domain/services/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  public async validateUser(cpf: string, password: string) {
    const user = await this.userService.findOne(cpf);
    if(!user) { return null; }
    if(user.validatePassword(password)) {
      delete user['password'];
      return user;
    }
    return null;
  }

  public async login(user: User) {
    const payload = {
      identity: user.cpf,
      sub: user.id
    };
    return {
      access_token: this.jwtService.sign(payload)
    };
  }
}
