import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { FindAddressUserCases } from './useCases/find-address.userCases';
import { AddressRepository } from './address.repository';
import { IOwner } from './interfaces/owner.interface';
import { IAddress } from './interfaces/address.interface';
import { AlreadyExistsAddressByOwnerUseCases } from './useCases/already-exists-addressByOwner.useCases';

@Injectable()
export class AddressService {
  constructor(
    private addresRepository: AddressRepository,
    private alreadyExists: AlreadyExistsAddressByOwnerUseCases,
  ) {}
  async create(createAddressDto: CreateAddressDto & IOwner) {
    const existsAddress = await this.alreadyExists.alreadExists({
      phone: createAddressDto.phone,
      email: createAddressDto.email,
    });
    if (!existsAddress) {
      const address: IAddress = await FindAddressUserCases(
        createAddressDto.zipcode,
      );
      const data: IAddress & IOwner = { ...address, ...createAddressDto };
      if (address) {
        await this.addresRepository.registrerAddressByOwner(data);
      } else {
        await this.addresRepository.registerTemporaryAddressByOwner(
          data,
          createAddressDto.zipcode,
        );
      }
    }
  }
}
