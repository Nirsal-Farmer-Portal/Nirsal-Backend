import mongoose, { Document } from 'mongoose'
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({timestamps:true, versionKey:false})
export class Account extends Document{

    @Prop({type : String})
    phone : string;

    @Prop({type : String})
    email : string;

    @Prop({type : String})
    firstname : string;

    @Prop({type : String})
    lastname : string;

    @Prop({type : String})
    password : string;

    @Prop({type : String})
    account_type : string;

    @Prop({type : String})
    address : string;

    @Prop({type : String})
    type_category : string;

    @Prop({type : Object})
    address_data : object;

    @Prop({type : Boolean, default : false})
    is_verified : boolean;
}

export const AccountSchema = SchemaFactory.createForClass(Account)
