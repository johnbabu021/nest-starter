import { Inject, Injectable } from '@nestjs/common';
import { EliService } from './eli/eli.service';

@Injectable()
export class AppService {
  // @Inject(EliService)
  getHello(): string {
    return 'Hello johny!';
  }
}
