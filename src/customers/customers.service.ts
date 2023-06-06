import { Injectable } from '@nestjs/common';
import { getMaxListeners } from 'process';

@Injectable()
export class CustomersService {
  private users = [
    {
      id: 1,
      email: 'danny@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 2,
      email: 'sonny@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 3,
      email: 'toto@gmail.com',
      createdAt: new Date(),
    },
  ];
  findCustomerById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
