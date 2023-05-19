import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { ProjectsModule } from './features/projects/projects.module';
import { UserModule } from './features/user/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/universalDB'), ProjectsModule, UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
