import { Help, InjectBot, Message, On, Start, Update } from 'nestjs-telegraf';
import { Telegraf } from 'telegraf';

import { TelegrafContext } from '@common/interfaces';

import { EchoService } from './echo.service';

@Update()
export class EchoUpdate {
  constructor(
    @InjectBot('echo') private readonly bot: Telegraf<TelegrafContext>,
    private readonly echoService: EchoService,
  ) {}

  @Start()
  async onStart() {
    const me = await this.bot.telegram.getMe();
    return `Hello, I'm ${me.first_name}!`;
  }

  @Help()
  async onHelp() {
    return 'Send me any text and I will echo it back.';
  }

  @On('text')
  onMessage(@Message('text') message: string) {
    return this.echoService.echo(message);
  }
}
