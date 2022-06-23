import { AbstractRepositoryPrisma } from '../../database/repository/abstract.repository';
import { IAddress } from './interfaces/address.interface';
import { PrismaService } from '../../database/config.database';
import { EnumDatabasePrisma } from '../../enums/database.enum';

export class AddressRepository extends AbstractRepositoryPrisma<IAddress> {
  constructor(private prisma: PrismaService) {
    super(EnumDatabasePrisma.address, prisma);
  }
}
