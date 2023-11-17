import { Module } from '@nestjs/common';
import { CommoditiesController } from './controllers/commodities.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EntityModule } from '../entity.module';
import { CommoditiesService } from './services/commodities.service';
@Module({
	imports:[
		MongooseModule.forFeature([...EntityModule])
	],
	providers:[CommoditiesService],
	controllers:[CommoditiesController]
})
export class CommoditiesModule {}
