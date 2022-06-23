import { ClientKafka } from '@nestjs/microservices';
import { AddressService } from './address.service';
export declare class AddressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    registreAddress({ value }: ClientKafka): string;
}
