import { Injectable, HttpException, HttpStatus } from "@nestjs/common";

@Injectable()
export class CardService{

    validateCard(cardNumber:string): string {
        // CardNetworks being concidered are verve, mastercard and Visa
        const cleanedString = cardNumber.replace(/\D/g, "")
        const digitsThere = /^\d+$/.test(cleanedString);
        if (!digitsThere) throw new HttpException("Some Characters there are not digits", HttpStatus.BAD_REQUEST);
        const cardLength = cleanedString.length; 
        
        if (cardLength =) throw new HttpException("Lenght of digits are invalid", HttpStatus.BAD_GATEWAY)

    }
    
}