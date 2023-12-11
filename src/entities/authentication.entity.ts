import mongoose, { Document, SchemaType, SchemaTypes, Types } from 'mongoose'
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Account } from './account.entity';

@Schema({timestamps:true, versionKey:false})
export class Authentication extends Document{

    @Prop({
        ref : Account.name,
        type : SchemaTypes.ObjectId
    })
    account : Types.ObjectId;

    @Prop({ type : String })
    token : string;
}

export const AuthenticationSchema = SchemaFactory.createForClass(Authentication)
