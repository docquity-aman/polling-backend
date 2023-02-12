import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Poll {
  @PrimaryGeneratedColumn()
  pollID: number;

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
