import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RatsController } from './rats/rats.controller';
import { Catsontroller } from './cats.controller';
import { EliController } from './eli/eli.controller';
import { EliService } from './eli/eli.service';
import { EliModule } from './eli/eli.module';

@Module({
  imports: [EliModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private appService: AppService) {}
}
