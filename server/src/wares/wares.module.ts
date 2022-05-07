import { Module } from '@nestjs/common';
import { WaresService } from './wares.service';
import { WaresController } from './wares.controller';

@Module({
  controllers: [WaresController],
  providers: [WaresService]
})
export class WaresModule {}
