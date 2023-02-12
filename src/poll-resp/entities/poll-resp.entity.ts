import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PollResp {
  @PrimaryGeneratedColumn()
  userID: number;

  @Column()
  pollID: number;

  @Column()
  optionID: number;
}
