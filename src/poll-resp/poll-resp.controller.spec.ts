import { Test, TestingModule } from '@nestjs/testing';
import { PollRespController } from './poll-resp.controller';
import { PollRespService } from './poll-resp.service';

describe('PollRespController', () => {
  let controller: PollRespController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PollRespController],
      providers: [PollRespService],
    }).compile();

    controller = module.get<PollRespController>(PollRespController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
