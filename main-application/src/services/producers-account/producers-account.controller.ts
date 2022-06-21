import { Controller, Inject, Post } from '@nestjs/common';
import { ClientKafka, MessagePattern } from '@nestjs/microservices';

@Controller('producers-account')
export class ProducersAccountController {
  constructor(@Inject('KAFKA_SERVICE') private producer: ClientKafka) {}

  @Post()
  newAccount() {
    console.log('tesete');
    this.producer.send('new-account', { data: '' });
  }
}
