import { hashSync } from 'bcrypt';

export function generating(phone?: number) {
  return {
    key: () => {
      return hashSync(null, 10);
    },
    number: () => {
      const number = phone * Date.now();
      return number;
    },
  };
}
