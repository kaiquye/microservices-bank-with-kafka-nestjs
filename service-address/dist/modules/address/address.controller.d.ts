import { AddressService } from './address.service';
import { KafkaMessage } from 'kafkajs';
export declare class AddressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    registreAddress({ value }: KafkaMessage): Promise<void>;
}
