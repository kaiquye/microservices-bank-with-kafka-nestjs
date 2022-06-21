import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';

async function bootstrap() {
  ConfigModule.forRoot({
    isGlobal: true,
  });
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
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
  );
  await app.listen();
}
bootstrap();
