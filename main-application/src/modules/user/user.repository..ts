import { AbstractRepositoryPrisma } from '../../database/repository/abstract.repository.prisma';
import { IUser } from './Interfaces/user.interface';
import { PrismaService } from '../../database/connection.prisma';
import { EnumDatabasePrisma } from '../../enums/enum.database.prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository extends AbstractRepositoryPrisma<IUser> {
  constructor(private prisma: PrismaService) {
    super(EnumDatabasePrisma.user, prisma);
  }

  disable(id: number) {
    // @ts-ignore
    return this.prisma.uSER.update({
      where: {
        id: id,
      },
      data: {
        active: false,
      },
    });
  }
}
