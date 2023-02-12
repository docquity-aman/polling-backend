/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOptionCounterDto } from './dto/create-option-counter.dto';
import { UpdateOptionCounterDto } from './dto/update-option-counter.dto';
import { OptionCounter } from './entities/option-counter.entity';

@Injectable()
export class OptionCounterService {
  constructor(
    @InjectRepository(OptionCounter)
    private optionCounterRepository: Repository<OptionCounter>,
  ) {}

  create(createOptionCounterDto: CreateOptionCounterDto) {
    // return 'This action adds a new optionCounter';
    return this.optionCounterRepository.save(createOptionCounterDto);
  }

  findAll(): Promise<OptionCounter[]> {
    return this.optionCounterRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} optionCounter`;
  }

  update(id: number, updateOptionCounterDto: UpdateOptionCounterDto) {
    return `This action updates a #${id} optionCounter`;
  }

  remove(id: number) {
    return `This action removes a #${id} optionCounter`;
  }
}
