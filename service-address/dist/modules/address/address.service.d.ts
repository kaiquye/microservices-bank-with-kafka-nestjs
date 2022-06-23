import { CreateAddressDto } from './dto/create-address.dto';
import { AddressRepository } from './address.repository';
import { IOwner } from './interfaces/owner.interface';
export declare class AddressService {
    private addresRepository;
    constructor(addresRepository: AddressRepository);
    create(createAddressDto: CreateAddressDto & IOwner): Promise<void>;
}
