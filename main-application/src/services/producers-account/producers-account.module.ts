import { Module } from '@nestjs/common';
import { ProducersAccountController } from './producers-account.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
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
      },
    ]),
  ],
  controllers: [ProducersAccountController],
})
export class ProducersAccountModule {}
