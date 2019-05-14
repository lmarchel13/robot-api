import { Controller, Get } from '@nestjs/common';
import { OrdensService } from './ordens.service';
import { Ordens } from './interfaces/ordens.interface';

@Controller('api/ordens')
export class OrdensController {
  constructor(private readonly ordensService: OrdensService) {}

  @Get()
  async findAll(): Promise<Ordens[]> {
    return this.ordensService.findAll();
  }
}
