import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OptionCounterService } from './option-counter.service';
import { CreateOptionCounterDto } from './dto/create-option-counter.dto';
import { UpdateOptionCounterDto } from './dto/update-option-counter.dto';

@Controller('option-counter')
export class OptionCounterController {
  constructor(private readonly optionCounterService: OptionCounterService) {}

  @Post()
  create(@Body() createOptionCounterDto: CreateOptionCounterDto) {
    return this.optionCounterService.create(createOptionCounterDto);
  }

  @Get()
  findAll() {
    return this.optionCounterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.optionCounterService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOptionCounterDto: UpdateOptionCounterDto,
  ) {
    return this.optionCounterService.update(+id, updateOptionCounterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.optionCounterService.remove(+id);
  }
}
