import mongoose, { Document } from 'mongoose'
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({timestamps:true, versionKey:false})
export class StatesCommodities extends Document{

}

export const StatesCommoditiesSchema = SchemaFactory.createForClass(StatesCommodities)