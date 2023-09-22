import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AuthModule, 
    MongooseModule.forRoot("mongodb+srv://nhandt2101:nhan21012003@cluster0.dboyqpg.mongodb.net/?retryWrites=true&w=majority"),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
