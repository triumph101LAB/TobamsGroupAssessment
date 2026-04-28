import { IsString,IsNotEmpty } from "class-validator";

export class ValidateCardDTO{

    @IsString()
    @IsNotEmpty()
    cardNumber!:string
}