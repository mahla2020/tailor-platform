import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// import { UsersController } from './users/users.controller';
// import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/users-db'),
    UsersModule,
  ],
})
export class AppModule {}
