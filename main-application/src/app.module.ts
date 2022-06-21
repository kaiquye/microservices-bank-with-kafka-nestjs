import { Module } from '@nestjs/common';
import { AuthenticationModule } from './services/authentication/authentication.module';
import { UserModule } from './services/user/user.module';

@Module({
  imports: [AuthenticationModule, UserModule],
})
export class AppModule {}
