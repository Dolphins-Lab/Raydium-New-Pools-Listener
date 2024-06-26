import { PartialType } from '@nestjs/mapped-types';
import { CreateRaydiumDto } from './create-raydium.dto';

export class UpdateRaydiumDto extends PartialType(CreateRaydiumDto) {}
