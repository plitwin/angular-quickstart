import { Injectable } from '@angular/core';
import { createTestCustomers } from "./test.data";
import { LoggerService } from "./logger.service";
import { Customer } from './model';

@Injectable()
export class DataService {
    customers: Customer[];

      constructor( 
            private loggerService: LoggerService
        ) { }

    getCustomers() {
        this.customers = createTestCustomers();
        this.loggerService.log(this.customers.length + " customers returned.");
        return createTestCustomers();
    }
}