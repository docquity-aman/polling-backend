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
    private pollRepository: Repository<PollResp>,
  ) {}

  create(CreatePollRespDto: CreatePollRespDto) {
    return this.pollRepository.save(CreatePollRespDto);
  }

  findAll() {
    return this.pollRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} pollResp`;
  }

  update(id: number, updatePollRespDto: UpdatePollRespDto) {
    return `This action updates a #${id} pollResp`;
  }

  remove(id: number) {
    return `This action removes a #${id} pollResp`;
  }
}
