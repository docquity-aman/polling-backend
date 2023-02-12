import { Test, TestingModule } from '@nestjs/testing';
import { PollRespService } from './poll-resp.service';

describe('PollRespService', () => {
  let service: PollRespService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PollRespService],
    }).compile();

    service = module.get<PollRespService>(PollRespService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
