import { IsNumber } from 'class-validator';

export class PollResponseDTO {
  @IsNumber()
  pollID: number;

  @IsNumber()
  optionID: number;
}
