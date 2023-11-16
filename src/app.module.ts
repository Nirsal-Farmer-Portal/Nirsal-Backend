import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommoditiesModule } from './modules/commodities/commodities.module';

@Module({
  imports: [
    CommoditiesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
