import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StatesCommodities } from 'src/entities/states_commodities.entity';

@Injectable()
export class CommoditiesService {

    constructor(
        @InjectModel(StatesCommodities.name)
        private readonly stateCommoditiesModel : Model<StatesCommodities>
    ){}

    /**
     * @member getCommoditiesForStates
     * @returns
     * 
     * This methods finds and returns all states with commodities
     */
    async getCommoditiesForStates()
    {   
        const records = await this.stateCommoditiesModel.find()

        // group data
        const data = {}

        // now we check to be sure and then
        if (records)
            records.forEach((row)=>{
                if (!data[row.state]) data[row.state] = []
                // push record
                data[row.state].push({
                    lga : row.lga,
                    commodity : row.commodity,
                    proximal_location : row.proximal_location
                })
            })

        // return data
        return data
    }
}
