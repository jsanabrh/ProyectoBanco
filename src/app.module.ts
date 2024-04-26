import { Module } from '@nestjs/common';
import { PersistanceModule } from './persistance/persistance.module';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './persistance/db-config';
import { TransferModule } from './transfer/transfer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      load:[dbConfig],
      isGlobal:true,
    }),
    PersistanceModule,
    TransferModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
