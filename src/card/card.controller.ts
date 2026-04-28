import { Body, Controller, Post } from "@nestjs/common";
import { CardService } from "./card.service";
import { ValidateCardDTO } from "./dto/card.dto";
@Controller()


export class CardController {

    constructor(private readonly cardService:CardService){}
  @Post('validate-card')
  validateCard(@Body() body:ValidateCardDTO){
    return this.cardService.validateCard(body.cardNumber)
  }
}