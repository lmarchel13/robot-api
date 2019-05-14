import { Get, Controller, Render, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CotacaoService } from './modules/cotacao/cotacao.service';
import { OrdensService } from './modules/ordens/ordens.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly cotacaoService: CotacaoService,
    private readonly ordensService: OrdensService,
  ) {}

  @Get()
  @Render('index')
  root() {
    return {
      title: 'Robot Web App - Em desenvolvimento',
      name: 'Robot Web App',
    };
  }

  @Get('cotacoes')
  @Render('cotacoes')
  async cotacoes(@Query() query) {
    const { page, limit } = query;
    const data = await this.cotacaoService.findAll(
      parseInt(page),
      parseInt(limit),
    );

    return {
      title: 'Robot Web App - Em desenvolvimento',
      heading: 'Cotações',
      name: 'Robot Web App',
      data,
    };
  }

  @Get('ordens')
  @Render('ordens')
  async ordens(@Query() query) {
    let { page, limit } = query;

    const data = await this.ordensService.findAll(
      parseInt(page),
      parseInt(limit),
    );

    return {
      title: 'Robot Web App - Em desenvolvimento',
      heading: 'Ordens',
      name: 'Robot Web App',
      data,
    };
  }
}
