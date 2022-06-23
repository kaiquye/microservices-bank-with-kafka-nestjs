import { CreateAddressDto } from './dto/create-address.dto';
import { AddressRepository } from './address.repository';
import { IOwner } from './interfaces/owner.interface';
import { AlreadyExistsAddressByOwnerUseCases } from './useCases/already-exists-addressByOwner.useCases';
export declare class AddressService {
    private addresRepository;
    private alreadyExists;
    constructor(addresRepository: AddressRepository, alreadyExists: AlreadyExistsAddressByOwnerUseCases);
    create(createAddressDto: CreateAddressDto & IOwner): Promise<void>;
}
