import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cotacao } from './interfaces/cotacao.interface';

@Injectable()
export class CotacaoService {
  constructor(
    @InjectModel('cotacao') private readonly cotacaoModel: Model<Cotacao>,
  ) {}

  async findAll(page?: number, limit?: number): Promise<Cotacao[]> {
    page = page || 0;
    limit = limit || 50;

    return await this.cotacaoModel
      .find()
      .sort([['data', -1]])
      .limit(limit)
      .skip(page * limit)
      .exec();
  }
}
