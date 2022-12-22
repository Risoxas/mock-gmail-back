import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import Imail from './Imail';

@Schema()
class Mail implements Imail {
  @Prop()
  from: string;

  @Prop()
  to: string;

  @Prop()
  subject: string;

  @Prop()
  content: string;

  @Prop()
  read: boolean;

  @Prop()
  favorite: boolean;
}

export const MailSchema = SchemaFactory.createForClass(Mail);
