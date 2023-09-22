import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/signIn.dto';
import { SignUpDto } from './dto/signUp.dto';
import * as bcrypt from 'bcrypt'
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(signInDto : SignInDto) {
    const user = await this.usersService.findOneByUserName(signInDto.username)
    const passwordMatch = await bcrypt.compare(signInDto.password, user.password)
    if(!passwordMatch) {
      throw new UnauthorizedException()
    }
    const payload = { sub: user._id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    }
  }

  async findUserById(id: string) {
   return await this.usersService.findOneById(id)
  }

  async signUp(signUpDto : SignUpDto) {
    return this.usersService.signUp(signUpDto)
  }
}