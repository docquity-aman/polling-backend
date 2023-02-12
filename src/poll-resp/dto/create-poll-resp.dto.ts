import { IsNotEmpty } from 'class-validator';

export class CreatePollRespDto {
  @IsNotEmpty()
  pollID: number;

  @IsNotEmpty()
  optionID: number;
}
