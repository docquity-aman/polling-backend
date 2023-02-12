import { PartialType } from '@nestjs/mapped-types';
import { Column } from 'typeorm';
import { CreatePollDto } from './create-poll.dto';

export class UpdatePollDto extends PartialType(CreatePollDto) {
  @Column({ unique: true })
  pollQuestion: string;

  @Column()
  optA: string;

  @Column()
  optB: string;

  @Column()
  optC: string;

  @Column()
  optD: string;

  @Column()
  status: string;
}
