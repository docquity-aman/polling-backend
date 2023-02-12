import { PartialType } from '@nestjs/mapped-types';
import { IsNumber } from 'class-validator';

import { CreateOptionCounterDto } from './create-option-counter.dto';

export class UpdateOptionCounterDto extends PartialType(
  CreateOptionCounterDto,
) {
  @IsNumber()
  pollID: number;

  @IsNumber()
  countOptA: number;

  @IsNumber()
  countOptB: number;

  @IsNumber()
  countOptC: number;

  @IsNumber()
  countOptD: number;

  @IsNumber()
  totalResponse: number;
}
