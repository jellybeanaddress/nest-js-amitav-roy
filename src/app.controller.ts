import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}  // this is dependency injection and this was possible because
  // inside app service , we have injection decorator and app service here is available as a private variable inside the
  // appController class

  @Get()
  getHello(): string {   // get hello is a mehod
    return this.appService.getHello();  // it is calling appservice and hello world is printed.
  }


  // lets just say we create one more method

  @Get('/something')  // we are giving an url called 'something'
  getSomething(): string {
    return this.appService.getSomething();

  }
}
