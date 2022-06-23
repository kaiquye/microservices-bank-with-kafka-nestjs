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
exports.AddressService = void 0;
const common_1 = require("@nestjs/common");
const find_address_userCases_1 = require("./useCases/find-address.userCases");
const address_repository_1 = require("./address.repository");
let AddressService = class AddressService {
    constructor(addresRepository) {
        this.addresRepository = addresRepository;
    }
    async create(createAddressDto) {
        const address = await (0, find_address_userCases_1.FindAddressUserCases)(createAddressDto.zipcode);
        const data = Object.assign(Object.assign({}, address), createAddressDto);
        if (address) {
            await this.addresRepository.registrerAddressByOwner(data);
        }
        else {
            await this.addresRepository.registerTemporaryAddressByOwner(data, createAddressDto.zipcode);
        }
    }
};
AddressService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [address_repository_1.AddressRepository])
], AddressService);
exports.AddressService = AddressService;
//# sourceMappingURL=address.service.js.map