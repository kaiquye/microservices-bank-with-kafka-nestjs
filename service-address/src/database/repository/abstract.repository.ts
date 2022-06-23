import { PrismaClient } from '@prisma/client';
import { EnumDatabasePrisma } from '../../enums/database.enum';

interface Reader<T> {
  find(): Promise<T[]>;

  findOne(id: number);

  exists(id: number, where: T | object): Promise<boolean>;

  findoneorfail(where: T | object | []): Promise<T>;
}

interface Writer<T> {
  create(data: T): Promise<void | T>;

  update(id: number, item: Partial<T>): Promise<boolean>;

  delete(id: number): Promise<boolean>;
}

type Repository<T> = Reader<T> & Writer<T>;

export abstract class AbstractRepositoryPrisma<T> implements Repository<T> {
  private query: PrismaClient;
  private tableName: EnumDatabasePrisma;

  protected constructor(tableName: EnumDatabasePrisma, queryBuilder) {
    this.query = queryBuilder;
    this.tableName = tableName;
  }

  create(data: T): Promise<T> {
    return this.query[`${this.tableName.toString()}`].create({ data });
  }

  find(): Promise<T[]> {
    return this.query[`${this.tableName.toString()}`].findMany();
  }

  findOne(id: number) {
    this.query[`${this.tableName.toString()}`].findFirst({
      where: {
        id: id,
      },
    });
  }

  async exists(id: number | boolean, where: T | object | []): Promise<boolean> {
    if (id > 1 && id !== undefined) {
      const check = await this.query[`${this.tableName.toString()}`].findFirst({
        where: {
          id: id,
        },
      });
      return check !== null ? true : false;
    } else {
      delete where['id'];
      const check = await this.query[`${this.tableName.toString()}`].findFirst({
        where: {
          ...where,
        },
      });
      return check !== null ? true : false;
    }
  }

  findoneorfail(where: T | object | []): Promise<T> {
    console.log(where);
    return this.query[`${this.tableName}`].findFirst({ where });
  }

  update(id: number, item: Partial<T>): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  delete(id: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
