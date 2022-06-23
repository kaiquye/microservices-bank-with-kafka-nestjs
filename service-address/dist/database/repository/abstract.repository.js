"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractRepositoryPrisma = void 0;
class AbstractRepositoryPrisma {
    constructor(tableName, queryBuilder) {
        this.query = queryBuilder;
        this.tableName = tableName;
    }
    create(data) {
        return this.query[`${this.tableName.toString()}`].create({ data });
    }
    find() {
        return this.query[`${this.tableName.toString()}`].findMany();
    }
    findOne(id) {
        this.query[`${this.tableName.toString()}`].findFirst({
            where: {
                id: id,
            },
        });
    }
    async exists(id, where) {
        if (id > 1 && id !== undefined) {
            const check = await this.query[`${this.tableName.toString()}`].findFirst({
                where: {
                    id: id,
                },
            });
            return check !== null ? true : false;
        }
        else {
            delete where['id'];
            const check = await this.query[`${this.tableName.toString()}`].findFirst({
                where: Object.assign({}, where),
            });
            return check !== null ? true : false;
        }
    }
    findoneorfail(where) {
        console.log(where);
        return this.query[`${this.tableName}`].findFirst({ where });
    }
    update(id, item) {
        throw new Error('Method not implemented.');
    }
    delete(id) {
        throw new Error('Method not implemented.');
    }
}
exports.AbstractRepositoryPrisma = AbstractRepositoryPrisma;
//# sourceMappingURL=abstract.repository.js.map