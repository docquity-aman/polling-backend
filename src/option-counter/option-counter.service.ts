/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOptionCounterDto } from './dto/create-option-counter.dto';
import { PollResponseDTO } from './dto/poll.response.dto';
import { UpdateOptionCounterDto } from './dto/update-option-counter.dto';
import { OptionCounter } from './entities/option-counter.entity';

@Injectable()
export class OptionCounterService {
  constructor(
    @InjectRepository(OptionCounter)
    private optionCounterRepository: Repository<OptionCounter>,
  ) {}

  async create(pollResponse: PollResponseDTO) {
    let pollRes: CreateOptionCounterDto;
    pollRes = await this.findOne(pollResponse.pollID);

    if (pollRes) {
      let updatePoll: CreateOptionCounterDto;
      updatePoll = pollRes;
      switch (pollResponse.optionID) {
        case 1:
          updatePoll.countOptA = pollRes.countOptA + 1;
          break;
        case 2:
          updatePoll.countOptB = pollRes.countOptB + 1;
          break;
        case 3:
          updatePoll.countOptC = pollRes.countOptC + 1;
          break;
        case 4:
          updatePoll.countOptD = pollRes.countOptD + 1;
          break;
      }
      updatePoll.totalResponse = pollRes.totalResponse + 1;
      this.update(pollResponse.pollID, updatePoll);
      return updatePoll;
    } else {
      let newPollRes: CreateOptionCounterDto;
      newPollRes = {
        pollID: pollResponse.pollID,
        countOptA: 0,
        countOptB: 0,
        countOptC: 0,
        countOptD: 0,
        totalResponse: 1,
      };

      switch (pollResponse.optionID) {
        case 1:
          newPollRes.countOptA = 1;
          break;
        case 2:
          newPollRes.countOptB = 1;
          break;
        case 3:
          newPollRes.countOptC = 1;
          break;
        case 4:
          newPollRes.countOptD = 1;
          break;
      }
      return this.optionCounterRepository.save(newPollRes);
    }
  }

  findAll(): Promise<OptionCounter[]> {
    return this.optionCounterRepository.find();
  }

  findOne(pollID: number) {
    return this.optionCounterRepository.findOne({ where: { pollID } });
  }

  update(pollID: number, updateOptionCounterDto: UpdateOptionCounterDto) {
    return this.optionCounterRepository.update(pollID, updateOptionCounterDto);
  }

  remove(id: number) {
    return `This action removes a #${id} optionCounter`;
  }
}
