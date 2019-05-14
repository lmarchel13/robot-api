import * as mongoose from 'mongoose';

export const CotacaoSchema = new mongoose.Schema(
  {
    _id: String,
    data: String,
    ultimo: Number,
    abertura: Number,
    max: Number,
    min: Number,
    fechamento: Number,
  },
  { collection: 'cotacao' },
);
