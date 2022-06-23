import { AbstractRepositoryPrisma } from '../../database/repository/abstract.repository';
import { IAddress } from './interfaces/address.interface';
import { PrismaService } from '../../database/config.database';
import { IOwner } from './interfaces/owner.interface';
export declare class AddressRepository extends AbstractRepositoryPrisma<IAddress> {
    private prisma;
    constructor(prisma: PrismaService);
    registrerAddressByOwner(data: IAddress & IOwner): import(".prisma/client").Prisma.Prisma__OWNERClient<import(".prisma/client").OWNER & {
        address: import(".prisma/client").ADDRESS[];
    }>;
    registerTemporaryAddressByOwner(data: IOwner, zipcode: string | number): import(".prisma/client").Prisma.Prisma__OWNERClient<import(".prisma/client").OWNER & {
        address_temporary: import(".prisma/client").ADDRESS_TEMPORARY[];
    }>;
}
