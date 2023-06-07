import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dtos/CreateCustomer.dto';

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

  @Get('')
  getAllCustomers() {
    return this.custromersService.getCustomers();
  }

  @Post('create')
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    this.custromersService.createCustomer(createCustomerDto);
  }
}
 