import { Module } from '@nestjs/common';
import { AccountController } from './controllers/account.controller';
import { AccountService } from './services/account.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EntityModule } from '../entity.module';
@Module({
	imports:[
		MongooseModule.forFeature([...EntityModule])
	],
	providers:[AccountService],
	controllers:[AccountController]
})
export class AccountModule {}
