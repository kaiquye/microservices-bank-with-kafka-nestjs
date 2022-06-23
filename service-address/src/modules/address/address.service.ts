import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';

@Injectable()
export class AddressService {
  create(createAddressDto: CreateAddressDto) {
    return 'This action adds a new address';
  }
}
