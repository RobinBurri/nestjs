import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private custromersService: CustomersService) {}

  @Get('/search/:id')
  searchCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.custromersService.findCustomerById(id);
    if (customer) {
      return customer;
    } else {
      throw new HttpException('Customer Not Found!', HttpStatus.BAD_REQUEST);
    }
  }
}
