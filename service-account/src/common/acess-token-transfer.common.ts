import { sign, verify } from 'jsonwebtoken';
import { AppError } from '../models/error/error.model';

export function AcessTokenTransferCommon() {
  return {
    valid: (token: string) => {
      try {
        const isValid = verify(token, '000000000');
        if (!isValid)
          return new AppError('invalid acess_token', 401).rpcException;
      } catch (e) {
        return new AppError('invalid acess_token', 401).rpcException;
      }
    },
    generete: (payload: object) => {
      return sign({ payload }, '000000000', { expiresIn: '10000s' });
    },
  };
}
