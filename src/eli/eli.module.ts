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
import { APP_FILTER } from '@nestjs/core';
@Global()
@Module({
  providers: [
    EliService,
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
  ],
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
