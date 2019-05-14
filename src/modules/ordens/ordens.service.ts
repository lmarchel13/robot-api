import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ordens } from './interfaces/ordens.interface';

@Injectable()
export class OrdensService {
  constructor(
    @InjectModel('Ordens') private readonly ordensModel: Model<Ordens>,
  ) {}

  async findAll(): Promise<Ordens[]> {
    return await this.ordensModel.find().exec();
  }
}
