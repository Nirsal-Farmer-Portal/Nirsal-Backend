import mongoose, { Document } from 'mongoose'
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({timestamps:true, versionKey:false})
export class Users extends Document{

}

export const UsersSchema = SchemaFactory.createForClass(Users)
