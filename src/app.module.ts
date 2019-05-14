import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { mongoConnection } from '../config/database.module';
import { OrdensModule } from './modules/ordens/ordens.module';
import { CotacaoModule } from './modules/cotacao/cotacao.module';
import { MONGO_URL } from 'config/keys';

@Module({
  imports: [mongoConnection(MONGO_URL), CotacaoModule, OrdensModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
