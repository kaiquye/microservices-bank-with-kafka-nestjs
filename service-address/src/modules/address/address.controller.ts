import { Controller } from '@nestjs/common';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';

@Controller()
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @MessagePattern('create-account')
  registreAddress(@Payload() createAddressDto: ClientKafka) {
    console.log(createAddressDto);
  }
}
