import { Document } from 'mongoose';

export interface Cotacao extends Document {
  readonly _id: String;
  readonly ultimo: Number;
  readonly abertura: Number;
  readonly max: Number;
  readonly min: Number;
  readonly fechamento: Number;
}
