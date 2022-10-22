import { DynamicModule, Module } from '@nestjs/common';
import { NewConnection } from './connection.provider';
import { DataBaseProvider } from './database.providers';

@Module({
  providers: [NewConnection],
})
export class databaseModule {
  static forRoot(entities: [], options?): DynamicModule {
    const providers = DataBaseProvider(options, entities);
    return {
      module: databaseModule,
      //   providers: providers,
      //   exports: providers,
    };
  }
}
