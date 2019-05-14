import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cotacao } from './interfaces/cotacao.interface';

@Injectable()
export class CotacaoService {
  constructor(
    @InjectModel('cotacao') private readonly cotacaoModel: Model<Cotacao>,
  ) {}

  async findAll(): Promise<Cotacao[]> {
    return await this.cotacaoModel.find().exec();
  }
}
