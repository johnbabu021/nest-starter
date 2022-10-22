import {
  Global,
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { EliController } from './eli.controller';
import { EliService } from './eli.service';
import { LoggerMiddleware } from './eli.middleware';
import { ElController } from './el.controller';
import { HttpExceptionFilter } from './httpExceptionFilters';
@Global()
@Module({
  providers: [{ provide: EliService, useClass: HttpExceptionFilter }],
  controllers: [EliController, ElController],
  exports: [EliService],
})
export class EliModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: '/emi', method: RequestMethod.GET })
      .forRoutes(ElController);
    //   .forRoutes({ path: 'e*i', method: RequestMethod.ALL });
  }
}
