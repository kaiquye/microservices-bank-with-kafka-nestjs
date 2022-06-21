import { Module } from '@nestjs/common';
import { ProducersAccountController } from './producers-account.controller';

@Module({
  controllers: [ProducersAccountController],
})
export class ProducersAccountModule {}
