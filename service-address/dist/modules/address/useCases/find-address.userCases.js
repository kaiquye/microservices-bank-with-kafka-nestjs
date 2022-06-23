"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAddressUserCases = void 0;
const axios_1 = require("axios");
async function FindAddressUserCases(zipcode) {
    try {
        console.log(zipcode);
        const address = await axios_1.default.get(`https://viacep.com.br/ws/${zipcode}/json/`);
        return address.data;
    }
    catch (error) {
        return 'invalid zipcode';
    }
}
exports.FindAddressUserCases = FindAddressUserCases;
//# sourceMappingURL=find-address.userCases.js.map