import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account } from 'src/entities/account.entity';
import { RecordSummaryQueryDto } from '../dtos/record-summary.dto';

@Injectable()
export class InputsService {
    constructor(
        @InjectModel(Account.name)
        private readonly accountModel : Model<Account>,
    ){}

    /**
     * @member getRecordSummary
     * @param filter 
     * @returns
     * @throws
     */
    async getRecordSummary(filter : RecordSummaryQueryDto)
    {
        const response = {};

        const records = await this.accountModel.find({
            type_category : { $regex : filter.category, $options : "i"},
            account_type : { $regex : filter.type, $options : "i"}
        });

        if (records && records.length > 0)
        {
            records.forEach((row:Account | any)=>{
                const stateName = row?.address_data?.stateName ?? "Nigeria";
                if (!response[stateName]) response[stateName] = [];
                response[stateName].push({
                    personal : {
                        firstname : row.firstname,
                        lastname : row.lastname,
                        phone : row.phone,
                        email : row.email,
                        address : row.address
                    },
                    location : row.address_data.geometry.location,
                    verified : row.is_verified
                })
            });
        }

        return response;
    }
}
