import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Bank } from '../entities/bank.entitie';
import { Model } from 'mongoose';
import { BankDto } from '../DTOs/common/bank.dto';
import { log } from 'console';

@Injectable()
export class TransferService {
  constructor(@InjectModel(Bank.name) protected bankModel: Model<Bank>) {} // Simulated in-memory database
  async findAll(){
    return this.bankModel.find();
  }

  async findOne(_id: number): Promise<BankDto> {{}
    const transfer = await this.bankModel.findById({ _id });
    if (!transfer) {
      throw new NotFoundException(`Transfer with ID ${_id} not found`);
    }
    return transfer;
  }

  async create(createBankDto: BankDto): Promise<Bank> {
    const generateId = await this.generateId()

    const newObject = {transferId: generateId, ...createBankDto}
    const newTransfer = await new this.bankModel(newObject);

    return newTransfer.save();
  }

  async update(_id: number, updateBankDto: BankDto): Promise<Bank> {
    return this.bankModel
      .findOneAndUpdate({ _id }, updateBankDto, { new: true })
      .exec();
  }

  async remove(_id: number): Promise<Bank> {
    return this.bankModel.findOneAndDelete({ _id }).exec();
  }

  async generateId() {
      const registers = await this.bankModel.find()
      let id
       registers.forEach(registerTransfer =>{
          id = registerTransfer.transferId + 1
          console.log(id);
          
      })
     return id
     
  }
  
} 
