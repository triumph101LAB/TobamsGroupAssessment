import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardController } from './card/card.controller';
import { CardService } from './card/card.service';

@Module({
  imports: [],
  controllers: [AppController,CardController],
  providers: [AppService,CardService],
})
export class AppModule {}
