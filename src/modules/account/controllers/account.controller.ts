import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AccountService } from '../services/account.service';
import { Success } from 'responses/general.response';
import { RegistrationDto } from '../dtos/registration.dto';
import { LoginDto } from '../dtos/login.dto';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  /**
   * @member checkPhoneNumber
   * @param phone
   *
   * This route checks if a phone number exists.
   */
  @Get('/check-phone/:phone')
  async checkPhoneNumber(@Param('phone') phone: string) {
    const data = await this.accountService.checkIfPhoneNumberExists(phone);

    return Success('Check completed.', { data });
  }

  /**
   * @member checkEmail
   * @param email
   *
   * This route checks if an email address exists.
   */
  @Get('/check-email/:email')
  async checkEmail(@Param('email') email: string) {
    const data = await this.accountService.checkIfEmailExists(email);

    return Success('Check completed.', { data });
  }

  /**
   * @member createAccount
   * @param account
   *
   * This creates an account.
   */
  @Post('/create')
  async createAccount(@Body() account: RegistrationDto) {
    const created = await this.accountService.createAccount(account);

    // all good
    return Success('Account created successfully', { data: { created } });
  }

  /**
   * @member authenticateUser
   * @param account
   *
   * This authenticates a user
   */
  @Post('/authenticate')
  async authenticateUser(@Body() account: LoginDto) {
    const data = await this.accountService.authenticateAccount(account);
    // all good
    return Success('Authenticated Successful', { data });
  }

  /**
   * @member getUnverifiedAccounts
   * @returns
   *
   * This returns all unverified accounts.
   */
  @Get('/unverifed-accounts')
  async getUnverifiedAccounts() {
    const accounts = await this.accountService.unverifiedAccounts();
    return Success('Unverified accounts', { data: accounts });
  }

  /**
   * @member verifyAccount
   * @param accountId
   * @returns
   */
  @Get('/verify-account/:id')
  async verifyAccount(@Param('id') accountId: string) {
    const accounts = await this.accountService.verifyAccount(accountId);
    return Success('Account verified successfully', { data: accounts });
  }

  /**
   * @member getVerifiedAccounts
   * @returns
   */
  @Get('/verified-accounts')
  async getVerifiedAccounts() {
    const accounts = await this.accountService.verifiedAccounts();
    return Success('Verified accounts', { data: accounts });
  }

  /**
   * @member getRegisteredAccounts
   * @returns
   */
  @Get('/registered-accounts')
  async getRegisteredAccounts() {
    const accounts = await this.accountService.registeredAccounts();
    return Success('Registered accounts', { data: accounts });
  }
}
