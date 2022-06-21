import { Module } from '@nestjs/common';
import { AuthenticationModule } from './domains/authentication/authentication.module';
import { UserModule } from './domains/user/user.module';

@Module({
  imports: [AuthenticationModule, UserModule],
})
export class AppModule {}
