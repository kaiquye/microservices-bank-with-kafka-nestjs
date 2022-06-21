import {
  Body,
  Controller,
  Inject,
  OnModuleInit,
  Patch,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import {
  Client,
  ClientKafka,
  MessagePattern,
  Transport,
} from '@nestjs/microservices';
import { NewAccountDto } from './dto/new-account.dto';
import { INewAccountInterface } from './interface/new-account.interface';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('producers-account')
export class ProducersAccountController implements OnModuleInit {
  constructor(@Inject('KAFKA_SERVICE') private producer: ClientKafka) {}

  async onModuleInit() {
    // this.producer.subscribeToResponseOf('new-account');
    await this.producer.connect();
  }

  @Post()
  newAccount(@Body() body: NewAccountDto, @Req() request) {
    const infosNewAccount: INewAccountInterface = { ...request.user, ...body };
    console.log(infosNewAccount);
    return this.producer.emit('create-account', {
      data: { ...infosNewAccount },
    });
  }

  newTransfer() {
    return this.producer.send('new-transfer', {});
  }
}
