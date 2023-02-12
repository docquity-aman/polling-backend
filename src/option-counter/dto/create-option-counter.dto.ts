import { IsNumber } from 'class-validator';

export class CreateOptionCounterDto {
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
}
