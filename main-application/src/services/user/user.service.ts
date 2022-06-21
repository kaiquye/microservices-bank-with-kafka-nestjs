import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository.';
import { AppError } from '../../model/app.error';
import { hashSync } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}
  async create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    const exist = await this.userRepository.exists(false, {
      OR: [{ email: createUserDto.email }, { phone: createUserDto.phone }],
    });
    if (exist) new AppError('user already registered', 409);
    createUserDto.password = hashSync(createUserDto.password, 10);
    await this.userRepository.create(createUserDto);
  }

  async findByEmail(email: string) {
    try {
      const user = await this.userRepository.findoneorfail({ email: email });
      return user;
    } catch (e) {
      return null;
    }
  }
}
