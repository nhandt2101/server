import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/users.schema';
import { Model } from 'mongoose';
import { SignUpDto } from 'src/auth/dto/signUp.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async findOneByUserName(username: String) {
    return this.userModel.findOne({ username: username })
  }

  async findOneById(_id: string) {
    return this.userModel.findById({ _id })
  }

  async getAllUser() {
    const result = await this.userModel.find().exec()
    for(const res of result) {

    }
    return result
  }

  async signUp(signUpDto : SignUpDto) {
    const {username, password, ...newSignUpDto } = signUpDto
    const existingUser = await this.userModel.findOne({ username });

    if (existingUser) {
      throw new Error('Username already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new this.userModel({
      username: username,
      password: hashedPassword,
      ...newSignUpDto
    })
    return await newUser.save()
  }
}
