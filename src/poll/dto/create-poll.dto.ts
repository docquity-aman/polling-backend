import { IsNotEmpty } from 'class-validator';

export class CreatePollDto {
  pollID: number;

  @IsNotEmpty()
  pollQuestion: string;

  @IsNotEmpty()
  optA: string;

  @IsNotEmpty()
  optB: string;

  @IsNotEmpty()
  optC: string;

  @IsNotEmpty()
  optD: string;

  @IsNotEmpty()
  status: string;
}
