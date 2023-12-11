import { IsEmail, IsNotEmpty, IsObject, IsOptional, IsString } from "class-validator";

export class RegistrationDto{

    @IsNotEmpty()
    @IsString()
    firstname : string;

    @IsNotEmpty()
    @IsString()
    lastname : string;

    @IsOptional()
    @IsEmail()
    email : string;

    @IsNotEmpty()
    @IsString()
    phone : string;

    @IsNotEmpty()
    @IsString()
    password : string;

    @IsNotEmpty()
    @IsString()
    password_again : string;

    @IsNotEmpty()
    @IsString()
    account_type : string;

    @IsNotEmpty()
    @IsString()
    address : string;

    @IsNotEmpty()
    @IsObject()
    address_data : any;

    @IsNotEmpty()
    @IsString()
    type_category : string;

}