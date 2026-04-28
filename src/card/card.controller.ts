import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CardService } from "./card.service";
import { ValidateCardDTO } from "./dto/card.dto";
@Controller('order')


export class CardController {

  constructor(private readonly cardService:CardService){}
  @Post('validate-card')
  @HttpCode(HttpStatus.OK)
  validateCard(@Body() body:ValidateCardDTO){
    return this.cardService.validateCard(body.cardNumber)
  }
}