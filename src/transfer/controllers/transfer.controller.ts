import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TransferService } from '../services/transfer.service';
import { BankDto } from '../DTOs/common/bank.dto';

@Controller('transfers')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

   @Get()
  findAll() {
    return this.transferService.findAll();
  } 

   @Get(':id')
  findOne(@Param('id') id: number) {
    return this.transferService.findOne(id);
  } 

  @Post()
  create(@Body() transfer: BankDto) {
    return this.transferService.create(transfer);
  }

 @Put(':id')
  update(@Param('id') id: number, @Body() transfer: BankDto) {
    return this.transferService.update(id, transfer);
  }

   @Delete(':id')
  remove(@Param('id') id: number) {
    return this.transferService.remove(id);
  } 

}
