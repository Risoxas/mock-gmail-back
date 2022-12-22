import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import Iuser from './Iuser';

@Schema()
class User implements Iuser {
  @Prop()
  mail: string;

  @Prop()
  password: string;

  @Prop()
  name: {
    firstName: { type: string; required: true };
    secondName: string;
    lastName: { type: string; required: true };
    secondLastName: string;
  };

  @Prop()
  mailbox: {
    inbox: Types.ObjectId;
    outbox: Types.ObjectId;
    thrash: Types.ObjectId;
  };
}

export const UserSchema = SchemaFactory.createForClass(User);
