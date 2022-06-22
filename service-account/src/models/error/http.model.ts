import { HttpException, HttpStatus } from '@nestjs/common';
export class Exceptions extends HttpException {
  constructor(Message: string, HttpStatus: HttpStatus) {
    super(Message, HttpStatus);
  }
}
