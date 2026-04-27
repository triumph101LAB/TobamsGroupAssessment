import { Module } from "@nestjs/common";
import { CardService } from "./card.service";

@Module({
    controllers:[],
    providers:[CardService]
})
export class CardModule{}