import { Module } from '@nestjs/common';
import { PollRespService } from './poll-resp.service';
import { PollRespController } from './poll-resp.controller';
import { PollResp } from './entities/poll-resp.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PollResp])],
  controllers: [PollRespController],
  providers: [PollRespService],
  exports: [PollRespService],
})
export class PollRespModule {}
