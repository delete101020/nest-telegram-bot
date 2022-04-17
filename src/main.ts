import { getBotToken } from 'nestjs-telegraf';

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const bot = app.get(getBotToken('echo'));
  app.use(bot.webhookCallback('/echo-webhook'));

  app.listen(3000, () => console.log('Server is listening on port 3000'));
}
bootstrap();
