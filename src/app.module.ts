import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatesModule } from './dates/dates.module';
import { ConfigModule } from '@nestjs/config'
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Date } from './dates/entities/date.entity';



@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: process.env.DB_HOST, 
        port: parseInt(process.env.DB_PORT, 10),
        username: process.env.DB_USER , 
        password: process.env.DB_PASS , 
        database: process.env.DB_NAME , 
        entities: [User, Date],  
        synchronize: true,
      }),
  DatesModule,
  UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
