import { Module } from '@nestjs/common';
import { InputsController } from './controllers/inputs.controller';
import { InputsService } from './services/inputs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EntityModule } from '../entity.module';

@Module({
	imports:[
		MongooseModule.forFeature([...EntityModule])
	],
	providers:[InputsService],
	controllers:[InputsController]
})
export class InputsModule {}
