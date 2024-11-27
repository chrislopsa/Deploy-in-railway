import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatesModule } from './dates/dates.module';

@Module({
  imports: [DatesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
