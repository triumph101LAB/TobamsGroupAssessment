import { Injectable, HttpException, HttpStatus } from "@nestjs/common";

@Injectable()
export class CardService{

    validatecard(cardnumber:string): string {
        const cleanedString = cardnumber.replace(/\D/g, "")
        const digitsThere = "/^\d+$".test(cleanedString)
        if (!digitsThere) throw new HttpException("Some Characters there are not digits", HttpStatus.BAD_REQUEST)
        return "Valid Input"    
 
        
    }
    
}