import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePollRespDto } from './dto/create-poll-resp.dto';
import { UpdatePollRespDto } from './dto/update-poll-resp.dto';
import { PollResp } from './entities/poll-resp.entity';

@Injectable()
export class PollRespService {
  constructor(
    @InjectRepository(PollResp)
    private pollRespRepository: Repository<PollResp>,
  ) {}

  create(CreatePollRespDto: CreatePollRespDto) {
    return this.pollRespRepository.save(CreatePollRespDto);
  }

  findAll() {
    return this.pollRespRepository.find();
  }

  findOne(pollID: number) {
    return this.pollRespRepository.findOne({ where: { pollID } });
  }

  update(id: number, updatePollRespDto: UpdatePollRespDto) {
    return `This action updates a #${id} pollResp`;
  }

  remove(id: number) {
    return `This action removes a #${id} pollResp`;
  }
}
