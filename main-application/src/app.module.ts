import { Module } from '@nestjs/common';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { UserModule } from './modules/user/user.module';
import { ProducersAccountModule } from './services/producers-account/producers-account.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { InterceptorsSvc } from './interceptors/rpc.interceptor';

@Module({
  imports: [AuthenticationModule, UserModule, ProducersAccountModule],
  providers: [InterceptorsSvc],
})
export class AppModule {}
