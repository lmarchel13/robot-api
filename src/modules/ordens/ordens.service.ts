import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ordens } from './interfaces/ordens.interface';

@Injectable()
export class OrdensService {
  constructor(
    @InjectModel('Ordens') private readonly ordensModel: Model<Ordens>,
  ) {}

  async findAll(page?: number, limit?: number): Promise<Ordens[]> {
    page = page || 0;
    limit = limit || 50;

    return await this.ordensModel
      .find()
      .sort([['data', -1], ['hora', -1]])
      .limit(limit)
      .skip(page * limit)
      .exec();
  }
}
