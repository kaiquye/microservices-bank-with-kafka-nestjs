import { AbstractRepositoryPrisma } from '../../database/repository/abstract.repository';
import { IAddress } from './interfaces/address.interface';
import { PrismaService } from '../../database/config.database';
import { EnumDatabasePrisma } from '../../enums/database.enum';
import { Injectable } from '@nestjs/common';
import { IOwner } from './interfaces/owner.interface';

@Injectable()
export class AddressRepository extends AbstractRepositoryPrisma<IAddress> {
  constructor(private prisma: PrismaService) {
    super(EnumDatabasePrisma.OWNER, prisma);
  }

  registrerAddressByOwner(data: IAddress & IOwner) {
    return this.prisma.oWNER.create({
      data: {
        email: data.email,
        phone: data.phone,
        fist_name: data.fist_name,
        active: true,
        address: {
          create: {
            cep: data.cep,
            logradouro: data.logradouro,
            complemento: data.complemento,
            bairro: data.bairro,
            localidade: data.localidade,
            uf: data.uf,
            gia: data.gia,
            ddd: data.ddd,
          },
        },
      },
      include: { address: true },
    });
  }

  registerTemporaryAddressByOwner(data: IOwner, zipcode: string | number) {
    return this.prisma.oWNER.create({
      data: {
        email: data.email,
        phone: data.phone,
        fist_name: data.fist_name,
        active: false,
        address_temporary: {
          create: {
            status:
              'zip code not found or undefined, try registering with a new zip code',
          },
        },
      },
      include: { address_temporary: true },
    });
  }
}
