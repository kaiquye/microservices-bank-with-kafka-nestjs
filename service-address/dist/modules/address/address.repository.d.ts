import { AbstractRepositoryPrisma } from '../../database/repository/abstract.repository';
import { IAddress } from './interfaces/address.interface';
import { PrismaService } from '../../database/config.database';
export declare class AddressRepository extends AbstractRepositoryPrisma<IAddress> {
    private prisma;
    constructor(prisma: PrismaService);
}
