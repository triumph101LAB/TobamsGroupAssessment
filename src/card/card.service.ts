import { Injectable, HttpException, HttpStatus } from "@nestjs/common";

@Injectable()
export class CardService{

    validateCard(cardNumber:string): string {
        //Input sanitzation
        // CardNetworks being concidered are verve, mastercard and Visa

        const cleanedString = cardNumber.replace(/\D/g, "")
        const digitsThere = /^\d+$/.test(cleanedString);
        if (!digitsThere) throw new HttpException("Some Characters there are not digits", HttpStatus.BAD_REQUEST);
        const cardLength = cleanedString.length; 
        if (cardLength < 16 || cardLength > 19) throw new HttpException("Lenght of digits are invalid", HttpStatus.BAD_GATEWAY)

        // Luhn Alogorithm
       let shouldDoubled = false
        let sum = 0
        for( let i = cardLength - 1;  i>=0; i--){
            let digits = parseInt(cleanedString.charAt(i), 10)  
          if(shouldDoubled){
            digits *=2
            if (digits > 9) digits -=9
          }

            sum +=digits
            shouldDoubled =!shouldDoubled
        }
        const passed = sum % 10
        if(passed !=0) throw new HttpException("Invalid Card Number ", HttpStatus.BAD_REQUEST)
        

    }
    
}