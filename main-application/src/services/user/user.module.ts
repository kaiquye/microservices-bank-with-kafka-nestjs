import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from '../../database/connection.prisma';
import { UserRepository } from './user.repository.';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, PrismaService],
})
export class UserModule {}
