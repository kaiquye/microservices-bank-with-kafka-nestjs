"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressRepository = void 0;
const abstract_repository_1 = require("../../database/repository/abstract.repository");
const config_database_1 = require("../../database/config.database");
const database_enum_1 = require("../../enums/database.enum");
const common_1 = require("@nestjs/common");
let AddressRepository = class AddressRepository extends abstract_repository_1.AbstractRepositoryPrisma {
    constructor(prisma) {
        super(database_enum_1.EnumDatabasePrisma.OWNER, prisma);
        this.prisma = prisma;
    }
    registrerAddressByOwner(data) {
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
    registerTemporaryAddressByOwner(data, zipcode) {
        return this.prisma.oWNER.create({
            data: {
                email: data.email,
                phone: data.phone,
                fist_name: data.fist_name,
                active: false,
                address_temporary: {
                    create: {
                        status: 'zip code not found or undefined, try registering with a new zip code',
                    },
                },
            },
            include: { address_temporary: true },
        });
    }
};
AddressRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_database_1.PrismaService])
], AddressRepository);
exports.AddressRepository = AddressRepository;
//# sourceMappingURL=address.repository.js.map