import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}
  @UseGuards(AuthGuard('local'))
  @Post()
  async getTokenLogin(@Req() req) {
    return await this.authenticationService.getToken(req.user);
  }
}
