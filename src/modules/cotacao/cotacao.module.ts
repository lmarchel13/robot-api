import { Module } from '@nestjs/common';
import { CotacaoController } from './cotacao.controller';
import { CotacaoService } from './cotacao.service';
import { CotacaoSchema } from './cotacao.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'cotacao', schema: CotacaoSchema }]),
  ],
  controllers: [CotacaoController],
  providers: [CotacaoService],
})
export class CotacaoModule {}
