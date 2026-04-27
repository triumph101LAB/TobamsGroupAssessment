import { Injectable } from "@nestjs/common";

@Injectable()
export class CardService{

    validatecard(cardnumber:string){
        if (cardnumber.includes(" ")){
            return "Error Your Card number should not contain a space"
        }
        if(cardnumber.length){

        }
        


    }
}