import { Module } from '@nestjs/common';
import { OrdensController } from './ordens.controller';
import { OrdensService } from './ordens.service';
import { OrdensSchema } from './ordens.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Ordens', schema: OrdensSchema }]),
  ],
  controllers: [OrdensController],
  providers: [OrdensService],
})
export class OrdensModule {}
