export default interface Imail {
  from: string;
  to: string;
  subject: string;
  content: string;
  read: boolean;
  favorite: boolean;
}
