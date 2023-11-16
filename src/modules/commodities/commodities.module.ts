import { Module } from '@nestjs/common';
import { CommoditiesController } from './controllers/commodities.controller';
@Module({
	imports:[],
	providers:[],
	controllers:[CommoditiesController]
})
export class CommoditiesModule {}
