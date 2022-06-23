import { EnumDatabasePrisma } from '../../enums/database.enum';
interface Reader<T> {
    find(): Promise<T[]>;
    findOne(id: number): any;
    exists(id: number, where: T | object): Promise<boolean>;
    findoneorfail(where: T | object | []): Promise<T>;
}
interface Writer<T> {
    create(data: T): Promise<void | T>;
    update(id: number, item: Partial<T>): Promise<boolean>;
    delete(id: number): Promise<boolean>;
}
declare type Repository<T> = Reader<T> & Writer<T>;
export declare abstract class AbstractRepositoryPrisma<T> implements Repository<T> {
    private query;
    private tableName;
    protected constructor(tableName: EnumDatabasePrisma, queryBuilder: any);
    create(data: T): Promise<T>;
    find(): Promise<T[]>;
    findOne(id: number): void;
    exists(id: number | boolean, where: T | object | []): Promise<boolean>;
    findoneorfail(where: T | object | []): Promise<T>;
    update(id: number, item: Partial<T>): Promise<boolean>;
    delete(id: number): Promise<boolean>;
}
export {};
