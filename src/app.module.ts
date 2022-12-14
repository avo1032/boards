import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './configs/typeorm.configs';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    BoardsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
