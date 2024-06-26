import { Module } from '@nestjs/common';
import { RaydiumService } from './raydium.service';
import { RaydiumController } from './raydium.controller';

@Module({
  controllers: [RaydiumController],
  providers: [RaydiumService],
})
export class RaydiumModule {}
