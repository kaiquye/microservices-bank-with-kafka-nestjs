import { sign, verify } from 'jsonwebtoken';

export function AcessTokenTransferCommon() {
  return {
    valid: (token: string) => {
      return verify(token, '000000000');
    },
    generete: (payload: object) => {
      return sign({ payload }, '000000000', { expiresIn: '10000s' });
    },
  };
}
