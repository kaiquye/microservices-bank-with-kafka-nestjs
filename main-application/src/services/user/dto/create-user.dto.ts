import { IUser } from '../Interfaces/user.interface';
import {
  IsString,
  IsInt,
  IsNumber,
  IsPhoneNumber,
  IsEmail,
  isEmpty,
  IsEmpty,
  IsNotEmpty,
} from 'class-validator';

export class CreateUserDto implements IUser {
  @IsEmail()
  email: string;
  @IsString()
  last_name: string;
  @IsNotEmpty()
  fist_name: string;
  @IsString()
  password: string;
  @IsNumber()
  phone: number;
}
