import * as mongoose from 'mongoose';

export const OrdensSchema = new mongoose.Schema(
  {
    id: String,
    hora: String,
    origem: String,
    pos: Number,
    tipo: String,
    ativo: String,
    valor: String,
    qtd: Number,
  },
  {
    collection: 'ordens',
  },
);
