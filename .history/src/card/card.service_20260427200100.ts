import { Injectable, HttpException, HttpStatus } from "@nestjs/common";

@Injectable()
export class CardService{

    validateCard(cardNumber:string): string {
        const cleanedString = cardNumber.replace(/\D/g, "")
        const digitsThere = /^\d+$/.test(cleanedString);
        if (!digitsThere) throw new HttpException("Some Characters there are not digits", HttpStatus.BAD_REQUEST);
        const cardLength = cleanedString.length;
        let cardtype = " ";
        if (cardLength == 16) {
            cardLength
        }   

    }
    
}