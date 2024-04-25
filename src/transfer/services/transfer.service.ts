import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Bank } from '../entities/bank.entitie';
import { Model } from 'mongoose';
import { BankDto } from '../DTOs/common/bank.dto';

@Injectable()
export class TransferService {
  constructor(@InjectModel(Bank.name) protected bankModel: Model<Bank>) {} // Simulated in-memory database
  async findAll() {
    return this.bankModel.find();
  }

  async findOne(id: string): Promise<BankDto> {
    const transfer = await this.bankModel.findOne({ id });
    if (!transfer) {
      throw new NotFoundException(`Transfer with ID ${id} not found`);
    }
    return transfer;
  }

  async create(createBankDto: BankDto): Promise<Bank> {
    const newTransfer = new this.bankModel(createBankDto);
    return newTransfer.save();
  }

  async update(id: string, updateBankDto: BankDto): Promise<Bank> {
    return this.bankModel
      .findOneAndUpdate({ transferId: id }, updateBankDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Bank> {
    return this.bankModel.findOneAndDelete({ transferId: id }).exec();
  }

  private generateId(): number {
    return this.bankModel.length > 0
      ? Math.max(...this.bankModel.map((t) => t.id)) + 1
      : 1;
  }
}
