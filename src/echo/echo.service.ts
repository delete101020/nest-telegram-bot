import { Injectable } from '@nestjs/common';

@Injectable()
export class EchoService {
  echo(text: string) {
    return `Echo: ${text}`;
  }
}
