import { RpcException } from '@nestjs/microservices';
import { Exceptions } from './http.model';

/**
 * posso retornar um modelo de erro para tratar ou um http  Exception
 */

export class AppError extends Error {
  private status: number;
  constructor(message, status) {
    console.log(message);
    super(message);
    this.status = status;
  }

  get Exception() {
    throw new Exceptions(this.message, this.status);
  }

  get rpcException() {
    throw new RpcException(this.message);
  }
}
