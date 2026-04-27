import { Module } from "@nestjs/common";
import { CardService } from "./card.service";

@Module({
    controllers:[Car],
    providers:[CardService]
})
export class CardModule{}