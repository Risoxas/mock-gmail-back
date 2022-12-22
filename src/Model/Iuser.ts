import mongoose from 'mongoose';
export default interface Iuser {
  mail: string;
  password: string;
  name: name;
  mailbox: mailbox;
}

interface name {
  firstName: { type: string; required: true };
  middleName?: string;
  lastName: { type: string; required: true };
  secondLastName?: string;
}

interface mailbox {
  inbox: mongoose.Types.ObjectId;
  outbox: mongoose.Types.ObjectId;
  thrash: mongoose.Types.ObjectId;
}
