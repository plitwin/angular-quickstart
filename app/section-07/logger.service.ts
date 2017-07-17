import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

    log(logText : string) {
        console.log(logText);
    }
}