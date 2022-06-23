import { AddressRepository } from '../address.repository';
interface query {
    phone: number;
    email: string;
}
export declare class AlreadyExistsAddressByOwnerUseCases {
    private addressRepository;
    constructor(addressRepository: AddressRepository);
    alreadExists(params: query): Promise<boolean>;
}
export {};
