import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { mongoConnection } from '../config/database.module';
import { OrdensModule } from './modules/ordens/ordens.module';
import { CotacaoModule } from './modules/cotacao/cotacao.module';
import { MONGO_URL } from 'config/keys';
import { CotacaoService } from './modules/cotacao/cotacao.service';
import { OrdensService } from './modules/ordens/ordens.service';

@Module({
  imports: [mongoConnection(MONGO_URL), CotacaoModule, OrdensModule],
  controllers: [AppController],
  providers: [AppService, CotacaoService, OrdensService],
})
export class AppModule {}
