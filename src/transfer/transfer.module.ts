import { Module } from '@nestjs/common';
import { TransferController } from './controllers/transfer.controller';
import { TransferService } from './services/transfer.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Bank, bankSchema } from './entities/bank.entitie';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Bank.name, schema: bankSchema }]),
  ],
  controllers: [TransferController],
  providers: [TransferService],
})
export class TransferModule {}
