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
exports.AlreadyExistsAddressByOwnerUseCases = void 0;
const address_repository_1 = require("../address.repository");
const common_1 = require("@nestjs/common");
let AlreadyExistsAddressByOwnerUseCases = class AlreadyExistsAddressByOwnerUseCases {
    constructor(addressRepository) {
        this.addressRepository = addressRepository;
    }
    async alreadExists(params) {
        const data = await this.addressRepository.exists(false, {
            OR: [{ phone: params.phone }, { email: params.email }],
        });
        console.log(data);
        if (data)
            return true;
        return false;
    }
};
AlreadyExistsAddressByOwnerUseCases = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [address_repository_1.AddressRepository])
], AlreadyExistsAddressByOwnerUseCases);
exports.AlreadyExistsAddressByOwnerUseCases = AlreadyExistsAddressByOwnerUseCases;
//# sourceMappingURL=already-exists-addressByOwner.useCases.js.map