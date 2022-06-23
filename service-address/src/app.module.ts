import { Module } from '@nestjs/common';
import { AddressModule } from './modules/address/address.module';

@Module({
  imports: [AddressModule],
})
export class AppModule {}
