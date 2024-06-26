import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RaydiumModule } from './raydium/raydium.module';
import { PrismaModule } from './prisma/prisma.module';
import { GatewayModule } from './gateway/gateway.module';

@Module({
  imports: [RaydiumModule, PrismaModule, GatewayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
