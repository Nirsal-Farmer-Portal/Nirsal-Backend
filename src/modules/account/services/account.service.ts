import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account } from 'src/entities/account.entity';
import { RegistrationDto } from '../dtos/registration.dto';
import { DuplicateRecordFound, InvalidValidation, RecordNotFound } from 'exceptions/custom.exceptions';
import * as bcrypt from 'bcrypt';
import { LoginDto } from '../dtos/login.dto';
import {sign} from 'jsonwebtoken';
import { Authentication } from 'src/entities/authentication.entity';

@Injectable()
export class AccountService {

    constructor(
        @InjectModel(Account.name)
        private readonly accountModel : Model<Account>,
        @InjectModel(Authentication.name)
        private readonly authenticationModel : Model<Authentication>
    ){}

    /**
     * @member checkIfPhoneNumberExists
     * @returns 
     * 
     * This checks if a phone number exists.
     */
    async checkIfPhoneNumberExists(phone : string)
    {
        const account = await this.accountModel.findOne({phone : phone});

        // all good
        return {
            exists : (account) ? true : false, 
            account
        }
    }

    /**
     * @member checkIfEmailExists
     * @param email 
     * 
     * This checks if an email exists.
     */
    async checkIfEmailExists(email : string)
    {
        const account = await this.accountModel.findOne({email : email});

        // all good
        return {
            exists : (account) ? true : false, 
            account
        }
    }

    /**
     * @member createAccount
     * @param account 
     * 
     * This creates a user account
     */
    async createAccount(account : RegistrationDto)
    {
        // check phone
        const checkPhone = await this.checkIfPhoneNumberExists(account.phone);

        if (checkPhone.exists) throw new DuplicateRecordFound("Phone number already in use");

        // check email
        if (account.email != "") 
        {
            const checkEmail = await this.checkIfPhoneNumberExists(account.email);

            if (checkEmail.exists) throw new DuplicateRecordFound("Email address already in use");
        }

        // check password
        if (account.password !== account.password_again) throw new InvalidValidation("Password does not match");

        // get password hash
        const {hashed} = await this.createPassword(account.password);

        // update password with hash
        account.password = hashed;

        // create account
        const create = await this.accountModel.create(account);

        // all good
        return create ? true : false;
    }

    /**
     * @member createPassword
     * @param password 
     * @returns 
     */
    async createPassword(password : string)
    {
        // create a password salt
        const salt = await bcrypt.genSalt(6);

        // encrypt password
        const hashed = await bcrypt.hash(password, salt);

        return {hashed, salt};
    }

    /**
     * @member authenticateAccount
     * @param data 
     */
    async authenticateAccount(data : LoginDto)
    {
        const account = await this.accountModel.findOne({
            $or : [
                {phone : data.username},
                {email : data.username}
            ]
        });

        // account exists?
        if (!account) throw new RecordNotFound("Incorrect login credentials");

        // compare password
        const validPassword = await bcrypt.compare(data.password, account.password);

        // not good
        if (!validPassword) throw new InvalidValidation("Incorrect login credentials");

        // get user token
        const token = sign({
            email : account.email,
            phone : account.phone
        }, 'secretKey', { expiresIn: '12h' });

        // update authentication table
        await this.authenticationModel.updateOne({account : account._id}, {
            account : account._id,
            token
        }, {
            upsert : true
        });

        // all good
        return {
            token,
            account : {
                id : account._id,
                phone : account.phone,
                email : account.email,
                firstname : account.firstname,
                lastname : account.lastname,
                account_type : account.account_type,
                address : account.address,
                category_type : account.type_category,
                verified : account.is_verified,
                address_data : account.address_data
            }
        }
    }   
}
