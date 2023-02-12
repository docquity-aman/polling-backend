import { PrimaryGeneratedColumn } from 'typeorm';

export class Poll {
  @PrimaryGeneratedColumn()
  pollID: number;
}
