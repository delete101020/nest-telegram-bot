import { Ctx, Hears, Help, On, Start } from 'nestjs-telegraf';
import { TelegrafContext } from './common/interfaces';

export class AppUpdate {
  @Start()
  async start(@Ctx() ctx: TelegrafContext) {
    ctx.reply('Welcome to the bot');
  }

  @Help()
  async help(@Ctx() ctx: TelegrafContext) {
    ctx.reply('Send me a sticker');
  }

  @On('sticker')
  async on(@Ctx() ctx: TelegrafContext) {
    ctx.reply('👍');
  }

  @Hears('hi')
  async hears(@Ctx() ctx: TelegrafContext) {
    ctx.reply('Hey there!');
  }
}
