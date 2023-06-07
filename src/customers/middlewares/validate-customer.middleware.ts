import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {

    use(req: Request, res: Response, next: NextFunction) {
        console.log('hello, world. I am inside ValidatecustomerMiddleware');
        next();
    }
}