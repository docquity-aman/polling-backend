import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PollRespService } from './poll-resp.service';
import { CreatePollRespDto } from './dto/create-poll-resp.dto';
import { UpdatePollRespDto } from './dto/update-poll-resp.dto';

@Controller('poll-resp')
export class PollRespController {
  constructor(private readonly pollRespService: PollRespService) {}

  @Post()
  create(@Body() createPollRespDto: CreatePollRespDto) {
    return this.pollRespService.create(createPollRespDto);
  }

  @Get()
  findAll() {
    return this.pollRespService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pollRespService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePollRespDto: UpdatePollRespDto,
  ) {
    return this.pollRespService.update(+id, updatePollRespDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pollRespService.remove(+id);
  }
}
