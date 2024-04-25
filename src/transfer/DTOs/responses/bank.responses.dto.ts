import { IsDate, IsNotEmpty } from '@nestjs/class-validator';
import { Type } from '@nestjs/class-transformer';
import { BankDto } from '../common/bank.dto';

export class bankResponseDto extends BankDto {
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  createdAt: Date;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  updatedAt: Date;
}
