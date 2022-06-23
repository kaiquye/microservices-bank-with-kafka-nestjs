import { Controller } from '@nestjs/common';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { IOwner } from './interfaces/owner.interface';
import { KafkaMessage } from 'kafkajs';

@Controller()
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @MessagePattern('create-account')
  registreAddress(@Payload() { value }: KafkaMessage) {
    const data: CreateAddressDto & IOwner = { ...value['data'] };
    console.log('---------', data);
    return this.addressService.create(data);
  }

  @MessagePattern('teste')
  teste() {
    console.log('-----------');
  }
}
