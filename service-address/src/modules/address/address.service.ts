import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { FindAddressUserCases } from './useCases/find-address.userCases';
import { AddressRepository } from './address.repository';
import { IOwner } from './interfaces/owner.interface';
import { IAddress } from './interfaces/address.interface';

@Injectable()
export class AddressService {
  constructor(private addresRepository: AddressRepository) {}
  async create(createAddressDto: CreateAddressDto & IOwner) {
    const address: IAddress = await FindAddressUserCases(
      createAddressDto.zipcode,
    );
    const data: IAddress & IOwner = { ...address, ...createAddressDto };
    if (address) {
      await this.addresRepository.registrerAddressByOwner(data);
    } else {
      await this.addresRepository.create({});
    }
  }
}
