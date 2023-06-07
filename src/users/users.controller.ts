import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { SerializedUser } from 'src/types/User';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('')
  getAllUsers() {
    return this.userService.getUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:name')
  getUserByName(@Param('name') name: string) {
    const user = this.userService.getUserByUserName(name);
    if (user) return new SerializedUser(user);
    else return new HttpException('User not Found!', HttpStatus.BAD_REQUEST);
  }
}
