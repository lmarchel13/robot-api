import * as mongoose from 'mongoose';

export const OrdensSchema = new mongoose.Schema(
  {
    id: String,
    data: String,
    hora: String,
    origem: String,
    pos: Number,
    tipo: String,
    ativo: String,
    valor: String,
    qtd: Number,
    status: String,
  },
  {
    collection: 'ordens',
  },
);
