import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManifestationsController } from './controllers/manifestations/manifestations.controller';
import { ManifestationsService } from './services/manifestations/manifestations.service';
import { Manifestations } from './manifestations.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Manifestations])],
  controllers: [ManifestationsController],
  providers: [ManifestationsService]
})
export class ManifestationsModule {}
