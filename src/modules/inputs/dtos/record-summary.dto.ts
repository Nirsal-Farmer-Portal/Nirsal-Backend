import { IsNotEmpty, IsString } from "class-validator";

export class RecordSummaryQueryDto 
{
    @IsNotEmpty()
    @IsString()
    category : string;

    @IsNotEmpty()
    @IsString()
    type : string;
}