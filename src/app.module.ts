import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [CustomersModule, UsersModule, TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: 'localhost',
      port: 1234,
      username: "nestjs",
      password: "nestjs",
      database: "nestjs",
      entities:  [],
      synchronize: true
    }
  )],
  controllers: [],
  providers: [],
})
export class AppModule {}
