import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/types/User';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      name: 'anson',
      password: 'anson',
    },
    {
      name: 'danny',
      password: 'danny',
    },
    {
      name: 'totot',
      password: 'totot',
    },
    {
      name: 'momo',
      password: 'momo',
    },
    {
      name: 'derek',
      password: 'derek',
    },
    {
      name: 'samantha',
      password: 'samantha',
    },
    {
      name: 'cristina',
      password: 'cristina',
    },
    {
      name: 'ruth',
      password: 'ruth',
    },
  ];

  getUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }

  getUserByUserName(userName: string) {
    return this.users.find((user) => user.name === userName);
  }
}
