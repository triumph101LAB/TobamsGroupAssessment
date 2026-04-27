import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardController } from './card/card.controller';

@Module({
  imports: [],
  controllers: [AppController,CardController],
  providers: [AppService],
})
export class AppModule {}
