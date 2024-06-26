import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { startConnection } from './scripts/new-raydium-pools/listener';

import { Connection, PublicKey } from '@solana/web3.js';

export const RAYDIUM_PUBLIC_KEY =
  '675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8';

export const HTTP_URL =
  'https://mainnet.helius-rpc.com/?api-key=HELIUS_API_KEY';

export const WSS_URL = 'wss://mainnet.helius-rpc.com/?api-key=HELIUS_API_KEY';

export const RAYDIUM = new PublicKey(RAYDIUM_PUBLIC_KEY);

export const INSTRUCTION_NAME = 'initialize2';

export const rpcConnection = new Connection(HTTP_URL, {
  wsEndpoint: WSS_URL,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };

  app.enableCors(corsOptions);

  await app.listen(5000);
  await startConnection(rpcConnection, RAYDIUM, INSTRUCTION_NAME);
}

bootstrap();
