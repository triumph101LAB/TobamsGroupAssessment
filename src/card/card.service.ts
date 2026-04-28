import { Injectable, HttpException, HttpStatus } from "@nestjs/common";

@Injectable()
export class CardService {
  validateCard(cardNumber: string){
    // Input sanitzation
    // CardNetworks being concidered are verve, mastercard and Visa
    const cleanedString = cardNumber.replace(/\D/g, "");
    const digitsThere = /^\d+$/.test(cleanedString);
    if (!digitsThere)
      throw new HttpException(
        "Some Characters there are not digits",
        HttpStatus.BAD_REQUEST,
      );
    const cardLength = cleanedString.length;
    if (cardLength < 16 || cardLength > 19)
      throw new HttpException(
        "Lenght of digits are invalid",
        HttpStatus.BAD_REQUEST,
      );

    // Luhn Alogorithm
    let shouldDoubled = false;
    let sum = 0;
    for (let i = cardLength - 1; i >= 0; i--) {
      let digits = parseInt(cleanedString.charAt(i), 10);
      if (shouldDoubled) {
        digits *= 2;
        if (digits > 9) digits -= 9;
      }
      sum += digits;
      shouldDoubled = !shouldDoubled;
    }
    const passed = sum % 10;
    // let isValid;
    // if (passed == 0){
    //   isValid = true 
    // }
    // else { isValid = false} 
    const isValid = passed === 0
    // Network Identification
      const patterns = {
      visa: /^4[0-9]{15}(?:[0-9]{3})?$/,
      mastercard: /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/,
      verve: /^(?:506099|5061[0-9]{2}|50786[5-9]|5078[7-9][0-9]|5079[0-5][0-9]|50796[0-4]|65000[2-9]|6500[1-2][0-7])[0-9]{10}(?:[0-9]{3})?$/,
    };

    let cardNetwork;
    if(patterns.visa.test(cleanedString)) cardNetwork = 'Visa'
    else if(patterns.mastercard.test(cleanedString)) cardNetwork = 'Mastercard'
    else if(patterns.verve.test(cleanedString)) cardNetwork = 'Verve'
    else{cardNetwork = 'Unknown'}

    return {
      "cardNumber":cleanedString,
      "length":cardLength,
      "isValid":isValid,
      "Network":cardNetwork,
    
    } 
  }
}