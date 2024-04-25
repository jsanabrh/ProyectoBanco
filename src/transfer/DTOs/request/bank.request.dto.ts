import { OmitType } from '@nestjs/swagger';
import { BankDto } from '../common/bank.dto';

export class BankRequestDto extends OmitType(BankDto, ['transferId']) {}
