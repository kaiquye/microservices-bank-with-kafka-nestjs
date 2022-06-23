"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressRepository = void 0;
const abstract_repository_1 = require("../../database/repository/abstract.repository");
const database_enum_1 = require("../../enums/database.enum");
class AddressRepository extends abstract_repository_1.AbstractRepositoryPrisma {
    constructor(prisma) {
        super(database_enum_1.EnumDatabasePrisma.address, prisma);
        this.prisma = prisma;
    }
}
exports.AddressRepository = AddressRepository;
//# sourceMappingURL=address.repository.js.map