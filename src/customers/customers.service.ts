import { Injectable } from '@nestjs/common';
import { Customer } from 'src/types/Customers';
import { CreateCustomerDto } from './dtos/CreateCustomer.dto';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'danny@gmail.com',
      firstName: 'Danny',
      lastName: 'Danny',
    },
    {
      id: 2,
      email: 'sonny@gmail.com',
      firstName: 'Sonny',
      lastName: 'Sonny',
    },
    {
      id: 3,
      email: 'toto@gmail.com',
      firstName: 'Toto',
      lastName: 'Toto',
    },
  ];

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(createCustomer: CreateCustomerDto) {
    this.customers.push(createCustomer);
    console.log(this.customers);
  }

  getCustomers() {
    return this.customers;
  }
}
