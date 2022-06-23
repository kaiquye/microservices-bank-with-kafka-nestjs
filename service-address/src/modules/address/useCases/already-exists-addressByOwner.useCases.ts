import { AddressRepository } from '../address.repository';
import { Injectable } from '@nestjs/common';

interface query {
  phone: number;
  email: string;
}

@Injectable()
export class AlreadyExistsAddressByOwnerUseCases {
  constructor(private addressRepository: AddressRepository) {}

  async alreadExists(params: query): Promise<boolean> {
    const data = await this.addressRepository.exists(false, {
      OR: [{ phone: params.phone }, { email: params.email }],
    });
    console.log(data);
    if (data) return true;
    return false;
  }
}
