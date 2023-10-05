import { Module } from '@nestjs/common';
import { EventsController } from './events/events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService} from '@nestjs/config';
import { UserModule } from './user/user.module';
import { ManifestationsModule } from './manifestations/manifestations.module';
import { dataSourceOptions } from 'db/data-source';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
    ManifestationsModule,
  ],
  controllers: [EventsController],
  providers: [],
})
export class AppModule {}
