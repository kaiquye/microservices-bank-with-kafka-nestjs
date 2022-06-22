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
  UseInterceptors,
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
import { catchError, Observable, throwError } from 'rxjs';
import { NewTransferDto } from './dto/new-transfer.dto';
import { InterceptorsSvc } from '../../interceptors/rpc.interceptor';

@UseGuards(AuthGuard('jwt'))
@Controller('producers-account')
@UseInterceptors(new InterceptorsSvc())
export class ProducersAccountController implements OnModuleInit {
  constructor(@Inject('KAFKA_SERVICE') private producer: ClientKafka) {}

  async onModuleInit() {
    this.producer.subscribeToResponseOf('validade-balance');
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

  @Post('transfer')
  newTransfer(@Body() body: NewTransferDto, @Req() request): Observable<any> {
    console.log(body);
    const infos: NewTransferDto = { ...request.user, ...body };
    console.log(infos);
    return this.producer
      .send('validade-balance', { data: infos })
      .pipe(catchError((err) => throwError(err)));
  }
}
