import { Controller, Get, Post, Put, Patch, Delete } from '@nestjs/common';
import { CommoditiesService } from '../services/commodities.service';
import { Success } from 'responses/general.response';

@Controller('commodities')
export class CommoditiesController {
    constructor(
        private readonly CommodityService : CommoditiesService
    ){}

    /**
     * @member getCommoditiesForStates
     * @returns 
     */
    @Get('/all-states')
    async getCommoditiesForStates()
    {
        const data = await this.CommodityService.getCommoditiesForStates()

        return Success("States with commodities", { data })
    }
}
