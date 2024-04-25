import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from '@nestjs/class-validator';

export class BankDto {
  @IsNotEmpty()
  @IsString()
  transferId: string;

  @IsNotEmpty()
  @IsString()
  senderUser: string;

  @IsNotEmpty()
  @IsNumber()
  senderUserAccount: number;

  @IsNotEmpty()
  @IsString()
  receiverUser: string;

  @IsNotEmpty()
  @IsNumber()
  receiverUserAccount: number;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsOptional()
  @IsString()
  message: string;
}
