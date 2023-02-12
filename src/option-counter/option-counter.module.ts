import { Module } from '@nestjs/common';
import { OptionCounterService } from './option-counter.service';
import { OptionCounterController } from './option-counter.controller';
import { OptionCounter } from './entities/option-counter.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([OptionCounter])],
  controllers: [OptionCounterController],
  providers: [OptionCounterService],
  exports: [OptionCounterService],
})
export class OptionCounterModule {}
