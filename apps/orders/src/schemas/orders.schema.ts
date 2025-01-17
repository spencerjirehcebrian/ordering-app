import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

Schema({ versionKey: false });
export class Order extends AbstractDocument {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  price: number;
}

export const OrderScema = SchemaFactory.createForClass(Order);
