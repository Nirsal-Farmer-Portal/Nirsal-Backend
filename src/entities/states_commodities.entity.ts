import mongoose, { Document } from 'mongoose'
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({timestamps:true, versionKey:false})
export class StatesCommodities extends Document{
    @Prop({type : String})
    state : string;

    @Prop({type : String})
    lga : string;

    @Prop({type : String})
    commodity : string;

    @Prop({type : String})
    proximal_location : string;
}

export const StatesCommoditiesSchema = SchemaFactory.createForClass(StatesCommodities)