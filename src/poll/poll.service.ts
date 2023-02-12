/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePollDto } from './dto/create-poll.dto';
import { UpdatePollDto } from './dto/update-poll.dto';
import { Poll } from './entities/poll.entity';

@Injectable()
export class PollService {
  constructor(
    @InjectRepository(Poll)
    private pollRepository: Repository<Poll>,
  ) {}

  get(): Promise<Poll[]> {
    return this.pollRepository.find();
  }

  async create(createPollDto: CreatePollDto) {
    return this.pollRepository.save(createPollDto);
  }

  findAll(): Promise<Poll[]> {
    // return `This action returns all poll`;
    return this.pollRepository.find();
  }

  findOne(pollID: number) {
    // return `This action  returns a #${id} poll`;
    return this.pollRepository.findOne({ where: { pollID } });
  }

  update(id: number, updatePollDto: UpdatePollDto) {
    return `This action updates  a  #${id} poll`;
  }

  remove(id: number) {
    return `This action removes a #${id} poll`;
  }
}
