import { PartialType } from '@nestjs/mapped-types';
import { Column } from 'typeorm';
import { CreatePollRespDto } from './create-poll-resp.dto';

export class UpdatePollRespDto extends PartialType(CreatePollRespDto) {
  @Column()
  pollID: number;

  @Column()
  optionID: number;
}
