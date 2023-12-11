import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';
import { AccountService } from '../services/account.service';
import { Success } from 'responses/general.response';
import { RegistrationDto } from '../dtos/registration.dto';
import { LoginDto } from '../dtos/login.dto';

@Controller('account')
export class AccountController {

    constructor(private readonly accountService : AccountService){}

    /**
     * @member checkPhoneNumber
     * @param phone 
     * 
     * This route checks if a phone number exists.
     */
    @Get('/check-phone/:phone')
    async checkPhoneNumber(@Param('phone') phone : string)
    {
        const data = await this.accountService.checkIfPhoneNumberExists(phone);

        return Success("Check completed.", {data});
    }

    /**
     * @member checkEmail
     * @param email 
     * 
     * This route checks if an email address exists.
     */
    @Get('/check-email/:email')
    async checkEmail(@Param('email') email : string)
    {
        const data = await this.accountService.checkIfEmailExists(email);

        return Success("Check completed.", {data});
    }

    /**
     * @member createAccount
     * @param account 
     * 
     * This creates an account.
     */
    @Post('/create')
    async createAccount(@Body() account : RegistrationDto)
    {
        const created = await this.accountService.createAccount(account);

        // all good
        return Success('Account created successfully', {data : {created}});
    }

    /**
     * @member authenticateUser
     * @param account 
     * 
     * This authenticates a user
     */
    @Post('/authenticate')
    async authenticateUser(@Body() account : LoginDto)
    {
        const data = await this.accountService.authenticateAccount(account);
 
        // all good
        return Success("Authenticated Successful", { data })
    }
}
