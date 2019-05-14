import { Document } from 'mongoose';

export interface Ordens extends Document {
  readonly id: String;
  readonly hora: String;
  readonly origem: String;
  readonly pos: Number;
  readonly tipo: String;
  readonly ativo: String;
  readonly valor: String;
  readonly qtd: Number;
}
