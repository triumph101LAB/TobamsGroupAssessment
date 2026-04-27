import { Injectable } from "@nestjs/common";

@Injectable()
export class CardService{

    validatecard(cardnumber:string): string {
        cleanedString = cardnumber.replace(/\D/g, " ")
        cardnumber.replace()
 
        return "tr"
    }
    
}