import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class OptionCounter {
  @PrimaryColumn()
  pollID: number;

  @Column()
  countOptA: number;

  @Column()
  countOptB: number;

  @Column()
  countOptC: number;

  @Column()
  countOptD: number;

  @Column()
  totalResponse: number;
}
