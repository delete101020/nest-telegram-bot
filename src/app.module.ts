import { TelegrafModule } from 'nestjs-telegraf';

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EchoModule } from './echo/echo.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TelegrafModule.forRootAsync({
      imports: [ConfigModule],
      botName: 'echo',
      useFactory: (configService: ConfigService) => ({
        token: configService.get<string>('TELEGRAM_ECHO_BOT_TOKEN'),
        launchOptions: {
          webhook: {
            domain:
              'https://7e33-2405-4803-c849-be60-ecb2-5117-b940-1fc3.ngrok.io',
            hookPath: '/echo-webhook',
          },
        },
        include: [EchoModule],
      }),
      inject: [ConfigService],
    }),
    EchoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
