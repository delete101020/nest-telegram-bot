import { Injectable } from '@nestjs/common';
import { TelegrafModuleOptions, TelegrafOptionsFactory } from 'nestjs-telegraf';

@Injectable()
export class TelegrafConfigService implements TelegrafOptionsFactory {
  createTelegrafOptions():
    | TelegrafModuleOptions
    | Promise<TelegrafModuleOptions> {
    return {
      token: process.env.TELEGRAM_BOT_TOKEN || '',
    };
  }
}
