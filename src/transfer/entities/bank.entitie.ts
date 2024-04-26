import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Bank {
  @Prop({ unique: true, trim: true })
  transferId: number;

  @Prop({ required: true, trim: true })
  senderUser: string;

  @Prop({ required: true, unique: true, trim: true })
  senderUserAccount: number;

  @Prop({ required: true, trim: true })
  receiverUser: string;

  @Prop({ required: true, unique: true, trim: true })
  receiverUserAccount: number;

  @Prop({ required: true, trim: true })
  amount: number;

  message: string;
}

export const bankSchema = SchemaFactory.createForClass(Bank);
