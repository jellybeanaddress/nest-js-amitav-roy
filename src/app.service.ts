import { Injectable } from '@nestjs/common';

@Injectable()   // anything we want to use as reusable code and it can have dependency on other modules
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }


  getSomething(): string {
    return 'Something can be sent back';
}
}