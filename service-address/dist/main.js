"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    ConfigModule.forRoot({
        isGlobal: true,
    });
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.KAFKA,
        options: {
            client: {
                clientId: process.env.clientId_account,
                brokers: [process.env.brokers],
            },
            consumer: {
                groupId: process.env.groupId_account,
                allowAutoTopicCreation: true,
            },
        },
    });
    await app.listen();
}
bootstrap();
//# sourceMappingURL=main.js.map