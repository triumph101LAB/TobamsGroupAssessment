import { Injectable } from "@nestjs/common";

@Injectable()
export class CardService{

    validatecard(cardnumber:string): string {
        const cleanedString = cardnumber.replace(/\D/g, " ")
        const digitsThere = "/^\d+$".test(cleanedString)
        if 
 
        
    }
    
}