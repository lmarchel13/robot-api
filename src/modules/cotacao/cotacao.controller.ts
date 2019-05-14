import { Controller, Get } from '@nestjs/common';
import { CotacaoService } from './cotacao.service';
import { Cotacao } from './interfaces/cotacao.interface';

@Controller('cotacao')
export class CotacaoController {
  constructor(private readonly cotacaoService: CotacaoService) {}

  @Get()
  async findAll(): Promise<Cotacao[]> {
    return await this.cotacaoService.findAll();
  }
}
