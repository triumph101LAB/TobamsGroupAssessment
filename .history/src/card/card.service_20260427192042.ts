import { Injectable } from "@nestjs/common";

@Injectable()
export class CardService{

    validatecard(cardnumber:string) :s{
        if (cardnumber.includes(" ")){
            return "Error Your Card number should not contain a space"
        }
        if(cardnumber.length >16 ){
            return " Invalid Length"
        }
        
    }
}