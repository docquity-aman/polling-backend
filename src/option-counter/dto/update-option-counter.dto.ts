import { PartialType } from '@nestjs/mapped-types';
import { CreateOptionCounterDto } from './create-option-counter.dto';

export class UpdateOptionCounterDto extends PartialType(
  CreateOptionCounterDto,
) {}
