import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const PORT = 3000;
  const app = await NestFactory.create(AppModule);

  await app.listen(PORT);
  Logger.log(`Server running at http://localhost:${PORT}`, 'ROBOT API');
}
bootstrap();