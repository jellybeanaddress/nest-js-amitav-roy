import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({  // decorators are where we pass the metadata to run the application behave in certain ways and this is how 
  // nestjs uses its dependency injection

  imports: [],        // for now its not importing any other module
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
