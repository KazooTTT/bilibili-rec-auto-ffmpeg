import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
const config = dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(config?.parsed?.PORT || 3000);
}
bootstrap();
