import { Exceptions } from './http.exception';

export class AppError extends Error {
  constructor(message, status, data?) {
    super(message);
    throw new Exceptions(message, status);
  }
}
