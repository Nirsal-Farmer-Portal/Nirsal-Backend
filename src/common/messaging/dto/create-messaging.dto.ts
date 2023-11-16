import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateMessagingDto {
    @IsNotEmpty()
    receiver : string;

    @IsNotEmpty()
    subject ?: string;

    @IsNotEmpty()
    message ?: string;

    @IsOptional()
    template ?: any;
}
