import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { AddressRepository } from './address.repository';
import { PrismaService } from '../../database/config.database';

@Module({
  controllers: [AddressController],
  providers: [AddressService, AddressRepository, PrismaService],
})
export class AddressModule {}
