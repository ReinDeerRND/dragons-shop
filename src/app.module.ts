import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DragonController } from './controllers/dragon.controller';

@Module({
  imports: [],
  controllers: [AppController, DragonController],
  providers: [AppService],
})
export class AppModule {}
